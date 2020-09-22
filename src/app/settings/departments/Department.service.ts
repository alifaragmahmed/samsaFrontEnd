import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { IReqDepartment } from "./IReqDepartment";

@Injectable({
    providedIn: 'root'
  })
  export class DepartmentService {
    constructor(private http: HttpClient) { }


    public getAll() : Observable<any> {
        return this.http.get('departments?api_token=123456789');
    }
  
    public getItemById(id:string){
        return this.http.get(`departments/${id}?api_token=123456789`);
    }
  
    public update(id:string, data:IReqDepartment): Observable<any> {
        return this.http.put(`departments/${id}?api_token=123456789`, data);
    }
  
    public create(data:IReqDepartment){
        return this.http.post(`departments?api_token=123456789`, data);
    }
    public delete(id: string): Observable<any>{
        return this.http.delete(`departments/${id}?api_token=123456789`);
    }
  }