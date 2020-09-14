import { Auth } from './../../shared/auth';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentAccountService {

  constructor(private http: HttpClient) {
  }

  /**
   * get services from api
   *
   */
  public search(key: string) {
    return this.http.get('account/search_student?api_token=' + Auth.getApiToken()+"&key="+key);
  }

  /**
   * get services from api
   *
   */
  public getStudentAccount(studentId) {
    return this.http.get('account/get_student_account?api_token=' + Auth.getApiToken()+"&student_id="+studentId);
  }

}
