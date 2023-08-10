import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {first} from "rxjs";
import {ClientsRoute} from "../clients/clients-route";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";

  constructor(private auth: AuthService,
              private router: Router,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  logInWithRedirect(): void {
    this.auth.logIn(this.username, this.password)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate([ClientsRoute.clients()]);
        },
        error: () => {
          this.snackBar.open('Bad credentials', 'close');
        }
      });
  }
}
