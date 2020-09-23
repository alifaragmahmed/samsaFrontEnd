import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReqParentJobs } from './IReqParentJobs';
import { Auth } from '../../shared/auth';

@Injectable({
  providedIn: 'root'
})
export class ParentJobsService {

  constructor(private http: HttpClient) { }

  public shareData:any;

  public getAll() : Observable<any> {
      return this.http.get(`parent-jobs?api_token=` + Auth.getApiToken());
  }

  public getItemById(id:string){
      return this.http.get(`parent-jobs/${id}?api_token=` + Auth.getApiToken());
  }

  public update(id:string, data:IReqParentJobs): Observable<any> {
      return this.http.put(`parent-jobs/${id}?api_token=` + Auth.getApiToken(), data);
  }

  public create(data:IReqParentJobs){
      return this.http.post(`parent-jobs?api_token=` + Auth.getApiToken(), data);
  }
  public delete(id: string): Observable<any>{
      return this.http.delete(`parent-jobs/${id}?api_token=` + Auth.getApiToken());

  }
}
