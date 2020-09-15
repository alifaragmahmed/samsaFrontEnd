import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class GeneralService {
  constructor(private http: HttpClient) {
  }

  public getAllCountries() {
    return this.http.get('countries?api_token=123456789');
  }
  public getAllCities() {
    return this.http.get('cities?api_token=123456789');
  }
  public getAllGovernments() {
    return this.http.get('governments?api_token=123456789');
  }
  getAllUsers(query: any) {
    const params = new HttpParams()
      .set('page', query.page)
      .set('size', query.size)
      .set('email', query.email || '')
      .set('userName', query.userName || '');
    return this.http.get('adminUsers/users', {params});
  }
}
