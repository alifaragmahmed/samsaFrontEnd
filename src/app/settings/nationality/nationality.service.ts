import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { IReqNationality } from './IReqNationality';

@Injectable({
  providedIn: 'root'
})
export class NationalityService{
    constructor(private http: HttpClient) { }


    public getAll() : Observable<any> {
        return this.http.get('nationalities?api_token=123456789');
    }
  
    public getItemById(id:string){
        return this.http.get(`nationalities/${id}?api_token=123456789`);
    }
  
    public update(id:string, data:IReqNationality): Observable<any> {
        return this.http.put(`nationalities/${id}?api_token=123456789`, data);
    }
  
    public create(data:IReqNationality){
        return this.http.post(`nationalities?api_token=123456789`, data);
    }
    public delete(id: string): Observable<any>{
        return this.http.delete(`nationalities/${id}?api_token=123456789`);
    }
}