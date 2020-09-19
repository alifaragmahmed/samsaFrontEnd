import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReqQualificationType } from '../models/IReqQualificationType';

@Injectable({ providedIn: 'root' })
export class qualificationTypeService {
    constructor(private http: HttpClient) { }

    public getAll(): Observable<any> {

        return this.http.get('qualification-types?api_token=123456789');
    }
    public getItemById(id:string){
        return this.http.get(`qualification-types/${id}?api_token=123456789`);
    }

    public update(id:string, data:IReqQualificationType): Observable<any> {
        return this.http.put(`qualification-types/${id}?api_token=123456789`, data);
    }

    public create(data:IReqQualificationType){
        return this.http.post(`qualification-types?api_token=123456789`, data);
    }
    public delete(id: string): Observable<any>{
        return this.http.delete(`qualification-types/${id}?api_token=123456789`);

    }
}
