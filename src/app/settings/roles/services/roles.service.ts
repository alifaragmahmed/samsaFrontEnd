import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReqRoles } from '../models/IReqRoles';
import { Auth } from '../../../shared/auth';

@Injectable({ providedIn: 'root' })
export class RolesService {
    constructor(private http: HttpClient) { }

    public shareData:any;

    public getAll() : Observable<any> {
        return this.http.get(`roles?api_token=` + Auth.getApiToken());
    }

    public getItemById(id:string){
        return this.http.get(`roles/${id}?api_token=` + Auth.getApiToken());
    }

    public update(id:string, data:IReqRoles): Observable<any> {
        return this.http.put(`roles/${id}?api_token=` + Auth.getApiToken(), data);
    }

    public create(data:IReqRoles){
        return this.http.post(`roles?api_token=` + Auth.getApiToken(), data);
    }
    public delete(id: string): Observable<any>{
        return this.http.delete(`roles/${id}?api_token=` + Auth.getApiToken());

    }

}
