import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const appRoutes: Routes = [
  { path: '',   redirectTo: '/clients', pathMatch: 'full' },
  { path: 'clients', loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
