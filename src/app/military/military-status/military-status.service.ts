import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReqMilitaryStatus } from './IReqMilitaryStatus';
import { Auth } from '../../shared/auth';

@Injectable({providedIn: 'root'})

  export class MilitaryStatusService {
    constructor(private http: HttpClient) { }


    public getAll() : Observable<any> {
        return this.http.get(`military-status?api_token=` + Auth.getApiToken());
    }
  
    public getItemById(id:string){
        return this.http.get(`military-status/${id}?api_token=` + Auth.getApiToken());
    }
  
    public update(id:string, data:IReqMilitaryStatus): Observable<any> {
        return this.http.put(`military-status/${id}?api_token=` + Auth.getApiToken(), data);
    }
  
    public create(data:IReqMilitaryStatus){
        return this.http.post(`military-status?api_token=` + Auth.getApiToken(), data);
    }
    public delete(id: string): Observable<any>{
        return this.http.delete(`military-status/${id}?api_token=` + Auth.getApiToken());
    }
  }