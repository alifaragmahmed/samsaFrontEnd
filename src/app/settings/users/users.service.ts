import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { IReqUsers } from "./IReqUsers";
import { Auth } from '../../shared/auth';
import { IReqUpdateUser } from "./IReqUpdateUser";

@Injectable({
    providedIn: 'root'
  })
  export class UserService{
    constructor(private http: HttpClient) { }
    public shareData:any;
  
    public getAll() : Observable<any> {
        return this.http.get(`users?api_token=` + Auth.getApiToken());
    }
    public getAllRoles() : Observable<any> {
        return this.http.get(`roles?api_token=` + Auth.getApiToken());
    }
    public getRoleById(id:string){
        return this.http.get(`roles/${id}?api_token=` + Auth.getApiToken());
    }
  
    public getItemById(id:string){
        return this.http.get(`users/${id}?api_token=` + Auth.getApiToken());
    }
  
    public update(id:string, data:IReqUpdateUser): Observable<any> {
        return this.http.put(`users/${id}?api_token=` + Auth.getApiToken(), data);
    }
  
    public create(data:IReqUsers){
        return this.http.post(`users?api_token=` + Auth.getApiToken(), data);
    }
    public delete(id: string): Observable<any>{
        return this.http.delete(`users/${id}?api_token=` + Auth.getApiToken());
    }

  }