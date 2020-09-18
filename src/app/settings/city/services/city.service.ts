import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReqCity } from '../model/IReqCity';

@Injectable({ providedIn: 'root' })
export class CityService {
    constructor(private http: HttpClient) { }

    public getAll(query:any): Observable<any> {
        const params = new HttpParams()
        .set('page', query.page)
        .set('size', query.size)
        return this.http.get('cities?api_token=123456789', { params: params });
    }
    public getItemById(id:string){
        return this.http.get(`cities/${id}?api_token=123456789`);
    }

    public update(id:string, city:IReqCity): Observable<any> {
        return this.http.put(`cities/${id}?api_token=123456789`, city);
    }

    public create(city:IReqCity){
        return this.http.post(`cities?api_token=123456789`, city);
    }
    public delete(id: string): Observable<any>{
        return this.http.delete(`cities/`+ id +`?api_token=123456789`);

    }
}
