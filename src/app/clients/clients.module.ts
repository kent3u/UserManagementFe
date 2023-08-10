import {NgModule} from "@angular/core";
import {ClientListComponent} from "./components/client-list/client-list.component";
import {ClientRepository} from "./repository/client.repository";
import {UserRepository} from "./repository/user.repository";
import {ClientAddEditComponent} from "./components/client-add-edit/client-add-edit.component";
import {MatTableModule} from "@angular/material/table";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ClientRoutingModule} from "./client-routing.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatDividerModule} from "@angular/material/divider";
import {CountryRepository} from "./repository/country.repository";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  imports: [
    MatTableModule,
    CommonModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatSnackBarModule
  ],
  declarations: [
    ClientListComponent,
    ClientAddEditComponent
  ],
  providers: [
    ClientRepository,
    UserRepository,
    CountryRepository
  ],
  exports: [
    ClientRoutingModule
  ]
})
export class ClientsModule {
}
