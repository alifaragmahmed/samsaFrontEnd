import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReqConstraintStatus } from '../models/IReqConstraintStatus';

@Injectable({ providedIn: 'root' })
export class ConstraintStatusService {
    constructor(private http: HttpClient) { }

    public shareData:any;

    public getAll() : Observable<any> {
        return this.http.get('constraint-status?api_token=123456789');
    }

    public getItemById(id:string){
        return this.http.get(`constraint-status/${id}?api_token=123456789`);
    }

    public update(id:string, data:IReqConstraintStatus): Observable<any> {
        return this.http.put(`constraint-status/${id}?api_token=123456789`, data);
    }

    public create(data:IReqConstraintStatus){
        return this.http.post(`constraint-status?api_token=123456789`, data);
    }
    public delete(id: string): Observable<any>{
        return this.http.delete(`constraint-status/${id}?api_token=123456789`);

    }

}
