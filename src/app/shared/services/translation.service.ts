import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../auth';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private http: HttpClient) { }
  
  /**
   * get services from api
   *
   */
  public get() {
    return this.http.get('translation?api_token=' + Auth.getApiToken());
  }

  /**
   * store new service
   */
  public update(data) { 
    return this.http.post('translation/update' + '?api_token=' + Auth.getApiToken(), data);
  }

}
