import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { IReqRelativeRelation } from "./IReqRelativeRelation";
import { Auth } from '../../shared/auth';

@Injectable({
    providedIn: 'root'
  })
  export class RelativeRelation {
    constructor(private http: HttpClient) { }

    public shareData:any;
  
    public getAll() : Observable<any> {
        return this.http.get(`relations?api_token=` + Auth.getApiToken());
    }
  
    public getItemById(id:string){
        return this.http.get(`relations/${id}?api_token=` + Auth.getApiToken());
    }
  
    public update(id:string, data:IReqRelativeRelation): Observable<any> {
        return this.http.put(`relations/${id}?api_token=` + Auth.getApiToken(), data);
    }
  
    public create(data:IReqRelativeRelation){
        return this.http.post(`relations?api_token=` + Auth.getApiToken(), data);
    }
    public delete(id: string): Observable<any>{
        return this.http.delete(`relations/${id}?api_token=` + Auth.getApiToken());
    }
  }