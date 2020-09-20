import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReqAcademicYear } from '../models/IReqAcademicYear';

@Injectable({ providedIn: 'root' })
export class AcademicYearService {
    constructor(private http: HttpClient) { }

    public getAll(): Observable<any> {

        return this.http.get('academic-years?api_token=123456789');
    }
    public getItemById(id:string){
        return this.http.get(`academic-years/${id}?api_token=123456789`);
    }

    public update(id:string, data:IReqAcademicYear): Observable<any> {
        return this.http.put(`academic-years/${id}?api_token=123456789`, data);
    }

    public create(data:IReqAcademicYear){
        return this.http.post(`academic-years?api_token=123456789`, data);
    }
    public delete(id: string): Observable<any>{
        return this.http.delete(`academic-years/`+ id +`?api_token=123456789`);

    }
}