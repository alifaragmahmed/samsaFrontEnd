import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CityService {
    constructor(private http: HttpClient) { }

    public getAll(query:any): Observable<any> {
        const params = new HttpParams()
        .set('page', query.page)
        .set('size', query.size)
        return this.http.get('cities?api_token=123456789', { params: params });
    }
}
