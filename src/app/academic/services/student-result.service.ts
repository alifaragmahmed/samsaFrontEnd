import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from 'src/app/shared/auth';

@Injectable({
  providedIn: 'root'
})
export class StudentResultService {
  $: any = $;

  constructor(private http: HttpClient) {
  }

  /**
   * get services from api
   *
   */
  public get(data) {
    return this.http.get('academic/result/get?api_token=' + Auth.getApiToken()+"&"+this.$.param(data));
  }

  /**
   * store new service
   */
  public store(data: any) {
    return this.http.post('academic/result/update' + '?api_token=' + Auth.getApiToken(), data);
  }
}
