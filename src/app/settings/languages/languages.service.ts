import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReqLanguage } from './IReqLanguage';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  constructor(private http: HttpClient) { }

  public shareData:any;

  public getAll() : Observable<any> {
      return this.http.get('languages?api_token=123456789');
  }

  public getItemById(id:string){
      return this.http.get(`languages/${id}?api_token=123456789`);
  }

  public update(id:string, data:IReqLanguage): Observable<any> {
      return this.http.put(`languages/${id}?api_token=123456789`, data);
  }

  public create(data:IReqLanguage){
      return this.http.post(`languages?api_token=123456789`, data);
  }
  public delete(id: string): Observable<any>{
      return this.http.delete(`languages/${id}?api_token=123456789`);

  }
}
