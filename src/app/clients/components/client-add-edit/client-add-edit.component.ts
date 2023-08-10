import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientRepository} from "../../repository/client.repository";
import {map, Observable, Subject, takeUntil} from "rxjs";
import {Country} from "../../model/country";
import {CountryRepository} from "../../repository/country.repository";
import {sortBy} from "lodash"
import {ClientEditRequest} from "../../model/client-edit-request";
import {ClientsRoute} from "../../clients-route";
import {ClientCreateRequest} from "../../model/client-create-request";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'client-add-edit',
  templateUrl: './client-add-edit.component.html',
  styleUrls: ['./client-add-edit.component.css']
})
export class ClientAddEditComponent implements OnInit {

  firstName: string = "";
  lastName: string = "";
  username: string = "";
  email?: string;
  address: string = "";
  countryIso: string = "";
  countries$: Observable<Country[]> | undefined;

  private clientId: string | null | undefined;
  private componentDestroyed$ = new Subject();

  constructor(private route: ActivatedRoute,
              private clientRepository: ClientRepository,
              private countryRepository: CountryRepository,
              private router: Router,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.clientId = this.route.snapshot.paramMap.get('id');
    if (this.isEditClient()) {
      this.populateFieldsWithExistingClient()
    }

    this.countries$ = this.countryRepository.findCountries()
      .pipe(map(countries => sortBy(countries, ['name'])));
  }

  getSubmitButtonLabel(): string {
    return this.isEditClient() ? 'Edit client' : 'Add client';
  }

  submitClient(): void {
    if (this.isEditClient()) {
      this.executeClientEditRequestFlow();
    } else {
      this.executeClientCreateRequestFlow();
    }
  }

  private populateFieldsWithExistingClient(): void {
    this.clientRepository.getClient(this.clientId!)
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe(client => {
        this.firstName = client.firstName;
        this.lastName = client.lastName;
        this.username = client.username;
        this.email = client.email;
        this.address = client.address;
        this.countryIso = client.countryIso;
      })
  }

  private executeClientEditRequestFlow(): void {
    const request: ClientEditRequest = {
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.username,
      email: this.email,
      address: this.address,
      countryIso: this.countryIso
    };
    this.clientRepository.changeClient(this.clientId!, request)
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe({
        next: () => {
          this.router.navigate([ClientsRoute.clients()])
        },
        error: (err) => {
          const errorCodes: string[] = err?.error?.errorCodes ?? [];
          this.snackBar.open(errorCodes[0], 'Close')
        }
      })
  }

  private executeClientCreateRequestFlow(): void {
    const request: ClientCreateRequest = {
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.username,
      email: this.email,
      address: this.address,
      countryIso: this.countryIso
    }
    this.clientRepository.createClient(request)
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe({
        next: () => {
          this.router.navigate([ClientsRoute.clients()])
        },
        error: (err) => {
          const errorCodes: string[] = err?.error?.errorCodes ?? [];
          this.snackBar.open(errorCodes[0], 'Close')
        }
      })
  }

  private isEditClient(): boolean {
    return !!this.clientId;
  }
}
