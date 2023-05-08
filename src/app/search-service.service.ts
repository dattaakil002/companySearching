import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  headers = new HttpHeaders({
    'x-api-key': 'V1ms242SBw1V2cEaki7lW5d8naW1PwnU2csymY7P'
  })

  constructor( private http: HttpClient) { }

  searchCompany(item: String) {
    return this.http.get('/TruProxyAPI/rest/Companies/v1/Search?Query='+item, {headers: this.headers});
  }

  searchOfficers(id: String) {
    return this.http.get('/TruProxyAPI/rest/Companies/v1/Officers?CompanyNumber='+id, {headers: this.headers})
  }
}
