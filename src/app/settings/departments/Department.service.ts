import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { IReqDepartment } from "./IReqDepartment";
import { Auth } from '../../shared/auth';

@Injectable({
    providedIn: 'root'
  })
  export class DepartmentService {
    constructor(private http: HttpClient) { }


    public getAll() : Observable<any> {
        return this.http.get(`departments?api_token=` + Auth.getApiToken());
    }
  
    public getItemById(id:string){
        return this.http.get(`departments/${id}?api_token=` + Auth.getApiToken());
    }
  
    public update(id:string, data:IReqDepartment): Observable<any> {
        return this.http.put(`departments/${id}?api_token=` + Auth.getApiToken(), data);
    }
  
    public create(data:IReqDepartment){
        return this.http.post(`departments?api_token=` + Auth.getApiToken(), data);
    }
    public delete(id: string): Observable<any>{
        return this.http.delete(`departments/${id}?api_token=` + Auth.getApiToken());
    }
  }