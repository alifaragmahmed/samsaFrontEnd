import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReqCaseConstraint } from '../models/IReqCaseConstraint';

@Injectable({ providedIn: 'root' })
export class CaseCoonstraintService {
    constructor(private http: HttpClient) { }

    public shareData:any;

    public getAll() : Observable<any> {
        return this.http.get('case-constraint?api_token=123456789');
    }

    public getItemById(id:string){
        return this.http.get(`case-constraint/${id}?api_token=123456789`);
    }

    public update(id:string, data:IReqCaseConstraint): Observable<any> {
        return this.http.put(`case-constraint/${id}?api_token=123456789`, data);
    }

    public create(data:IReqCaseConstraint){
        return this.http.post(`case-constraint?api_token=123456789`, data);
    }
    public delete(id: string): Observable<any>{
        return this.http.delete(`case-constraint/${id}?api_token=123456789`);

    }

}