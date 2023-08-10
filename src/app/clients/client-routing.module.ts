import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ClientListComponent} from "./components/client-list/client-list.component";
import {ClientAddEditComponent} from "./components/client-add-edit/client-add-edit.component";
import {AuthGuard} from "../auth.guard";

const routes: Routes = [
  {
    // path: 'test',
    // // canActivate: [AuthGuard],
    // children: [
    //   {
    //     path: 'clients',
    //     component: ClientListComponent,
    //   },
    //   {
    //     path: 'client-add-edit',
    //     component: ClientAddEditComponent,
    //   }
    // ]
    path: '',
    component: ClientListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-edit',
    component: ClientAddEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-edit/:id',
    component: ClientAddEditComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ClientRoutingModule {
}
