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
  public getCountryGovernments(id: string) {
    return this.http.get(`government/`+ id +`?api_token=123456789`);
  }
  public getAllLevels(){
    return this.http.get('levels?api_token=123456789');
  }
  public getAllAcademicYears(){
    return this.http.get('academic-years?api_token=123456789');
  }
  public getAllQualifications() {
    return this.http.get('qualifications?api_token=123456789');
  }

  public getAllDepartments(){
    return this.http.get('departments?api_token=123456789');
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
