import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReqLevel } from '../models/IReqLevel';

@Injectable({ providedIn: 'root' })
export class LevelService {
    constructor(private http: HttpClient) { }

    public shareData:any;

    public getAll() : Observable<any> {
        return this.http.get('levels?api_token=123456789');
    }

    public getItemById(id:string){
        return this.http.get(`levels/${id}?api_token=123456789`);
    }

    public update(id:string, data:IReqLevel): Observable<any> {
        return this.http.put(`levels/${id}?api_token=123456789`, data);
    }

    public create(data:IReqLevel){
        return this.http.post(`levels?api_token=123456789`, data);
    }
    public delete(id: string): Observable<any>{
        return this.http.delete(`levels/${id}?api_token=123456789`);

    }

}