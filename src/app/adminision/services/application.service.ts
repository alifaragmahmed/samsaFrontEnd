import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Auth } from '../../shared/auth';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http: HttpClient) {
  }

  /**
   * get services from api
   *
   */
  public get(page: any=1) {
    return this.http.get('adminision/applications?api_token=' + Auth.getApiToken()+"&page="+page);
  }

  /**
   * get services from api
   *
   */
  public load(id: number) {
    return this.http.get('adminision/applications/'+id+'?api_token=' + Auth.getApiToken());
  }

  /**
   * store new service
   */
  public store(data: any) { 
    return this.http.post('adminision/applications/store' + '?api_token=' + Auth.getApiToken(), data);
  }

  /**
   * update service
   */
  public update(data: FormData) { 
    return this.http.post('adminision/applications/update/' + data.get('id') + '?api_token=' + Auth.getApiToken(), data);
  }

  /**
   * remove service
   */
  public destroy(id) { 
    return this.http.post('adminision/applications/delete/' + id + '?api_token=' + Auth.getApiToken(), null);
  }
}
