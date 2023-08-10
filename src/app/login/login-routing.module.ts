import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    // path: '',
    // children: [
    //   { path: 'login', component: LoginComponent }
    // ]
    path: 'login',
    component: LoginComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LoginRoutingModule {
}
