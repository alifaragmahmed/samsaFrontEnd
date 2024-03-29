import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../auth';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public $: any = $;

  constructor(private http: HttpClient) {

  }


  /**
   * get services from api
   *
   */
  public get(url, data = {}) {
    return this.http.get(url + '?api_token=' + Auth.getApiToken() + "&" + this.$.param(data));
  }

  /**
   * get services from api
   *
   */
  loadHtml(url, data: any = {}) {
    //let headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    data.api_token = Auth.getApiToken();
    const headers = new HttpHeaders({
      'Content-Type': 'text/plain; charset=utf-8'
    });
    return this.http.get<string>(url, { headers: headers, params: data, responseType: 'text' as 'json' });
  }

  /**
   * store new service
   */
  public store(url, data: any) {
    return this.http.post(url + '?api_token=' + Auth.getApiToken(), data);
  }

  /**
   * update service
   */
  public update(url, data: any) {
    return this.http.post(url + '?api_token=' + Auth.getApiToken(), data);
  }

  /**
   * remove service
   */
  public destroy(url, id) {
    return this.http.post(url + '/' + id + '?api_token=' + Auth.getApiToken(), null);
  }
}
