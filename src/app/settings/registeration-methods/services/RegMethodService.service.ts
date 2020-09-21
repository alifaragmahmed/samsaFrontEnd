import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReqRegMethod } from '../models/IReqRegMethod';

@Injectable({ providedIn: 'root' })
export class RegMethodService {
    constructor(private http: HttpClient) { }

    public shareData:any;

    public getAll() : Observable<any> {
        return this.http.get('registration-methods?api_token=123456789');
    }

    public getItemById(id:string){
        return this.http.get(`registration-methods/${id}?api_token=123456789`);
    }

    public update(id:string, data:IReqRegMethod): Observable<any> {
        return this.http.put(`registration-methods/${id}?api_token=123456789`, data);
    }

    public create(data:IReqRegMethod){
        return this.http.post(`registration-methods?api_token=123456789`, data);
    }
    public delete(id: string): Observable<any>{
        return this.http.delete(`registration-methods/${id}?api_token=123456789`);

    }

}
