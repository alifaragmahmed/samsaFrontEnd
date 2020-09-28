import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auth } from '../../shared/auth';
import { IReqAreaSubmission } from './IReqAreaSubmission';

@Injectable({providedIn: 'root'})

export class MilitaryAreaSubmissionService {
    constructor(private http: HttpClient) { }


    public getAll() : Observable<any> {
        return this.http.get(`military-area-submission?api_token=` + Auth.getApiToken());
    }
  
    public getItemById(id:string){
        return this.http.get(`military-area-submission/${id}?api_token=` + Auth.getApiToken());
    }
  
    public update(id:string, data:IReqAreaSubmission): Observable<any> {
        return this.http.put(`military-area-submission/${id}?api_token=` + Auth.getApiToken(), data);
    }
  
    public create(data:IReqAreaSubmission){
        return this.http.post(`military-area-submission?api_token=` + Auth.getApiToken(), data);
    }
    public delete(id: string): Observable<any>{
        return this.http.delete(`military-area-submission/${id}?api_token=` + Auth.getApiToken());
    }
  }