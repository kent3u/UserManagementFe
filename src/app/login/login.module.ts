import {NgModule} from "@angular/core";
import {LoginComponent} from "./login.component";
import {LoginRepository} from "./repository/login.repository";
import {LoginRoutingModule} from "./login-routing.module";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDividerModule} from "@angular/material/divider";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatSnackBarModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    LoginRepository
  ],
  exports: [
   LoginRoutingModule
  ]
})
export class LoginModule {
}
