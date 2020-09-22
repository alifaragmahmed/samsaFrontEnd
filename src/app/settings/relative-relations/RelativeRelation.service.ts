import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { IReqRelativeRelation } from "./IReqRelativeRelation";

@Injectable({
    providedIn: 'root'
  })
  export class RelativeRelation {
    constructor(private http: HttpClient) { }

    public shareData:any;
  
    public getAll() : Observable<any> {
        return this.http.get('relations?api_token=123456789');
    }
  
    public getItemById(id:string){
        return this.http.get(`relations/${id}?api_token=123456789`);
    }
  
    public update(id:string, data:IReqRelativeRelation): Observable<any> {
        return this.http.put(`relations/${id}?api_token=123456789`, data);
    }
  
    public create(data:IReqRelativeRelation){
        return this.http.post(`relations?api_token=123456789`, data);
    }
    public delete(id: string): Observable<any>{
        return this.http.delete(`relations/${id}?api_token=123456789`);
    }
  }