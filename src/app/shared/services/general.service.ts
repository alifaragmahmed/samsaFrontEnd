import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class GeneralService {
  constructor(private http: HttpClient) {
  }

  public getAll() {
    return this.http.get('getAll/games');
  }

  getAllUsers(query: any) {
    const params = new HttpParams()
      .set('page', query.page)
      .set('size', query.size)
      .set('email', query.email || '')
      .set('userName', query.userName || '');
    return this.http.get('adminUsers/users', {params});
  }
}
