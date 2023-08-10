import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ClientRoutingModule} from "./clients/client-routing.module";
import {AppRoutingModule} from "./app-routing.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FooterComponent} from './footer/footer.component';
import {FormsModule} from "@angular/forms";
import {ClientsModule} from "./clients/clients.module";
import {LoginRoutingModule} from "./login/login-routing.module";
import {JwtInterceptor} from "./jwt.interceptor";
import {ErrorInterceptor} from "./error.interceptor";
import {LoginModule} from "./login/login.module";
import {JwtHelperService} from "@auth0/angular-jwt";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ClientRoutingModule,
    LoginRoutingModule,
    ClientsModule,
    LoginModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
