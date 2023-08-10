import {Component, OnInit} from "@angular/core";
import {map, Observable} from "rxjs";
import {UserRepository} from "../../repository/user.repository";
import {UserClient} from "../../model/user-client";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";
import {ClientsRoute} from "../../clients-route";

@Component({
  selector: 'client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  userClients$: Observable<MatTableDataSource<UserClient>> | undefined;


  constructor(private userRepository: UserRepository,
              private router: Router) {
  }

  ngOnInit(): void {
    this.userClients$ = this.userRepository.findUserClients()
      .pipe(map((userClients) => {
        const datasource = new MatTableDataSource<UserClient>();
        datasource.data = userClients;
        return datasource;
      }));
  }

  addClient(): void {
    this.router.navigate([ClientsRoute.clientsAddEdit()]);
  }

  editClient(clientId: string): void {
    this.router.navigate([ClientsRoute.clientsAddEdit(), clientId])
  }
}
