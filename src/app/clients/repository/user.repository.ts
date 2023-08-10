import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserClient} from "../model/user-client";

@Injectable({
  providedIn: 'root'
})
export class UserRepository {

  protected url = 'rest/api/users'

  constructor(private http: HttpClient) {
  }

  findUserClients(): Observable<UserClient[]> {
    return this.http.get<UserClient[]>(`${this.url}/clients`);
  }
}
