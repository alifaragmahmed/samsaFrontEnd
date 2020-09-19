import { Auth } from './../../shared/auth';
import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AcademicYearService {

  public static STUDENT_SERVICE_PREFIX = 'student_services';

  constructor(private http: HttpClient) {
  }

  /**
   * get academic_year_expenses from api
   *
   */
  public get() {
    return this.http.get('account/academic_year_expenses?api_token=' + Auth.getApiToken());
  }

  /**
   * store new service
   */
  public store(data) {
    // remove old cache
    return this.http.post('account/academic_year_expenses/store' + '?api_token=' + Auth.getApiToken(), data);
  }

  /**
   * update service
   */
  public update(data: any) {
    // remove old cache
    return this.http.post('account/academic_year_expenses/update/' + data.id + '?api_token=' + Auth.getApiToken(), data);
  }

  /**
   * remove service
   */
  public destroy(id) {
    // remove old cache
    return this.http.post('account/academic_year_expenses/delete/' + id + '?api_token=' + Auth.getApiToken(), null);
  }
}
