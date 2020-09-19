import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReqQualification } from '../models/IReqQualification';

@Injectable({ providedIn: 'root' })
export class QualificationService {
    constructor(private http: HttpClient) { }

    public getAll(): Observable<any> {

        return this.http.get('qualifications?api_token=123456789');
    }
    public getItemById(id:string){
        return this.http.get(`qualifications/${id}?api_token=123456789`);
    }

    public update(id:string, data:IReqQualification): Observable<any> {
        return this.http.put(`qualifications/${id}?api_token=123456789`, data);
    }

    public create(data:IReqQualification){
        return this.http.post(`qualifications?api_token=123456789`, data);
    }
    public delete(id: string): Observable<any>{
        return this.http.delete(`qualifications/${id}?api_token=123456789`);

    }
}
