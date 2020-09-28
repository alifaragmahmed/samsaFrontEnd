import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReqMilitaryArea } from '../models/IReqMilitaryArea'
import { Auth } from '../../../shared/auth';

@Injectable({ providedIn: 'root' })
export class militaryAreaService {
    constructor(private http: HttpClient) { }

    public getAll(): Observable<any> {
        return this.http.get(`military-areas?api_token=` + Auth.getApiToken());
    }

    public getItemById(id:string){
        return this.http.get(`military-areas/${id}?api_token=` + Auth.getApiToken());
    }

    public update(id:string, data:IReqMilitaryArea): Observable<any> {
        return this.http.put(`military-areas/${id}?api_token=` + Auth.getApiToken(), data);
    }

    public create(data:IReqMilitaryArea){
        return this.http.post(`military-areas?api_token=` + Auth.getApiToken(), data);
    }
    
    public delete(id: string): Observable<any>{
        return this.http.delete(`military-areas/${id}?api_token=` + Auth.getApiToken());

    }
}
