import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReqReuiredDocument } from './IReqReuiredDocument';
import { Auth } from '../../shared/auth';

@Injectable({ providedIn: 'root' })
export class RequiredDocumentsService {

  constructor(private http: HttpClient) { }

  public shareData:any;

  public getAll() : Observable<any> {
      return this.http.get(`adminision/required_documents?api_token=` + Auth.getApiToken());
  }

  public getItemById(id:string){
      return this.http.get(`adminision/required_documents/${id}?api_token=` + Auth.getApiToken());
  }

  public update(id:string, data:IReqReuiredDocument): Observable<any> {
      return this.http.put(`adminision/required_documents/${id}?api_token=` + Auth.getApiToken(), data);
  }

  public create(data:IReqReuiredDocument){
      return this.http.post(`adminision/required_documents?api_token=` + Auth.getApiToken(), data);
  }
  public delete(id: string): Observable<any>{
      return this.http.delete(`adminision/required_documents/${id}?api_token=` + Auth.getApiToken());

  }
}
