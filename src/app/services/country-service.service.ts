import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'  
})
export class CountryServiceService {

  url = 'https://restcountries.com/v2/lang/es';

  constructor(private _httpClient: HttpClient) {
  }

  getCountries() : Observable<Country[]> {
    return this._httpClient.get<Country[]>(this.url)
    .pipe(
      map(res => {
        return res.map(res => {
          return {
            name: res.name,
            alpha3Code: res.alpha3Code
          }
        })
      })
    );
  }
}
