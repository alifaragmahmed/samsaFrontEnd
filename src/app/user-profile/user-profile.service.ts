import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReqUserProfile } from './IReqUserProfile';
import { Auth } from '../shared/auth';
@Injectable({ providedIn: 'root' })

export class UserProfileService {
    constructor(private http: HttpClient) { }

    public getuserData(): Observable<any> {

        return this.http.get(`user-profile?api_token=` + Auth.getApiToken());
    }

    public update(id:string, data:IReqUserProfile): Observable<any> {
        return this.http.put(`academic-years/${id}?api_token=` + Auth.getApiToken(), data);
    }

    public create(data:IReqUserProfile){
        return this.http.post(`academic-years?api_token=` + Auth.getApiToken(), data);
    }
    public delete(id: string): Observable<any>{
        return this.http.delete(`academic-years/`+ id +`?api_token=` + Auth.getApiToken());

    }
}
