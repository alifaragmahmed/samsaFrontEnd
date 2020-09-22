import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReqDivisions } from './IReqDivisions';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  constructor(private http: HttpClient) { }

  public shareData:any;

  public getAll() : Observable<any> {
      return this.http.get('divisions?api_token=123456789');
  }

  public getItemById(id:string){
      return this.http.get(`divisions/${id}?api_token=123456789`);
  }

  public update(id:string, data:IReqDivisions): Observable<any> {
      return this.http.put(`divisions/${id}?api_token=123456789`, data);
  }

  public create(data:IReqDivisions){
      return this.http.post(`divisions?api_token=123456789`, data);
  }
  public delete(id: string): Observable<any>{
      return this.http.delete(`divisions/${id}?api_token=123456789`);
  }
  public getDepartmantByLevelId(level_id: string){
    return this.http.get(`department/${level_id}?api_token=123456789`);
  }
}
