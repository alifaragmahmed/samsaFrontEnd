import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReqItem } from '../models/IReqItem';

@Injectable({ providedIn: 'root' })
export class GovernmentService {
    constructor(private http: HttpClient) { }

    public getAll(query:any): Observable<any> {
        const params = new HttpParams()
        .set('page', query.page)
        .set('size', query.size)
        return this.http.get('governments?api_token=123456789', { params: params });
    }

    public getItemById(id:string){
        return this.http.get(`governments/${id}?api_token=123456789`);
    }

    public update(id:string, item:IReqItem): Observable<any> {
        return this.http.put(`governments/${id}?api_token=123456789`, item);
    }

    public create(item:IReqItem){
        return this.http.post(`governments?api_token=123456789`, item);
    }
    public delete(id: string): Observable<any>{
        return this.http.delete(`governments/`+ id +`?api_token=123456789`);

    }

}
