import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReqRegisterationStatus } from './IReqRegisterationStatus';
import { Auth } from '../../shared/auth';

@Injectable({
    providedIn: 'root'
  })

  export class RegisterationService {

    constructor(private http: HttpClient) { }
  
    public shareData:any;
  
    public getAll() : Observable<any> {
        return this.http.get(`languages?api_token=` + Auth.getApiToken());
    }
  
    public getItemById(id:string){
        return this.http.get(`languages/${id}?api_token=` + Auth.getApiToken());
    }
  
    public update(id:string, data:IReqRegisterationStatus): Observable<any> {
        return this.http.put(`languages/${id}?api_token=` + Auth.getApiToken(), data);
    }
  
    public create(data:IReqRegisterationStatus){
        return this.http.post(`languages?api_token=` + Auth.getApiToken(), data);
    }
    public delete(id: string): Observable<any>{
        return this.http.delete(`languages/${id}?api_token=` + Auth.getApiToken());
  
    }
  }