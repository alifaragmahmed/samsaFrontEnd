import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { Auth } from 'src/app/shared/auth';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  doc: any = AppModule.doc;

  constructor(private http: HttpClient) { }

  /**
   * get services from api
   *
   */
  public get(data: any) {
    return this.http.get('account/report/payment-details?api_token=' + Auth.getApiToken()+"&"+this.doc.jquery.param(data));
  }


  /**
   * get balances of students
   *
   */
  public getStudentBalances(data: any) {
    return this.http.get('account/report/student-balances?api_token=' + Auth.getApiToken()+"&"+this.doc.jquery.param(data));
  }
}
