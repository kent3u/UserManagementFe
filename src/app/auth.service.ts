import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {LoginRepository} from "./login/repository/login.repository";
import {HttpStatusCode} from "@angular/common/http";
import {Router} from "@angular/router";
import {LoginRoutes} from "./login/login-routes";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private token: string | null | undefined;

  constructor(private loginRepository: LoginRepository,
              private router: Router) {
  }

  logIn(username: string, password: string): Observable<any> {
    return this.loginRepository.logIn(username, password)
      .pipe(
        tap((response: any) => {
          if (response.status == HttpStatusCode.Ok) {
            localStorage.setItem('srini_token', response.headers.get("access_token")!);
            this.isLoggedIn$.next(true);
          }
        })
      );
  }

  logOut(): void {
    localStorage.removeItem('srini_token');
    this.isLoggedIn$.next(false);
    this.token = "";
    this.router.navigate([LoginRoutes.logIn()])
  }

  isLoggedIn(): boolean {
    return this.isLoggedIn$.value || Boolean(this.getToken());
  }

  getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('srini_token');
    }
    return this.token || "";
  }
}
