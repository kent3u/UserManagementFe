import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../model/client";
import {ClientEditRequest} from "../model/client-edit-request";
import {ClientCreateRequest} from "../model/client-create-request";
import {mapValues} from "lodash";

@Injectable({
  providedIn: 'root'
})
export class ClientRepository {

  protected url = "rest/api/clients"

  constructor(private http: HttpClient) {
  }

  getClient(clientId: string): Observable<Client> {
    return this.http.get<Client>(`${this.url}/${clientId}`);
  }

  changeClient(clientId: string, request: ClientEditRequest): Observable<void> {
    const mappedReq = mapValues(request, k => k === '' ? null : k)
    return this.http.put<void>(`${this.url}/${clientId}`, mappedReq);
  }

  createClient(request: ClientCreateRequest): Observable<any> {
    const mappedReq = mapValues(request, k => k === '' ? null : k);
    return this.http.post<any>(this.url, mappedReq);
  }
}
