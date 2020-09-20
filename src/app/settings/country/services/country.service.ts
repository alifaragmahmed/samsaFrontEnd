import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReqCreateCountry } from '../model/IReqCreateCountry';

@Injectable({ providedIn: 'root' })
export class CountryService {
    constructor(private http: HttpClient) { }

    public shareData:any;

    public getAll(query:any): Observable<any> {
        const params = new HttpParams()
        .set('page', query.page)
        .set('size', query.size)
        return this.http.get('countries?api_token=123456789', { params: params });
    }

    public getItemById(id:string){
        return this.http.get(`countries/${id}?api_token=123456789`);
    }

    public update(id:string, country:IReqCreateCountry): Observable<any> {
        return this.http.put(`countries/${id}?api_token=123456789`, country);
    }

    public createCountry(country:IReqCreateCountry){
        return this.http.post(`countries?api_token=123456789`, country);
    }
    public deleteCountryById(countryId: string): Observable<any>{
        return this.http.delete(`countries/`+ countryId +`?api_token=123456789`);

    }

}
