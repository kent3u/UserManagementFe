import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Country} from "../model/country";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CountryRepository {

  protected url = 'rest/api/countries'

  constructor(private http: HttpClient) {
  }

  findCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.url)
  }

}
