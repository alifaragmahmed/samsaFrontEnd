import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {IReqUsersSearchQuery} from '../models/IReqUserSearchQuery';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  public getUsersList(query: IReqUsersSearchQuery) {
    const params = new HttpParams()

    return this.http.get('account/students');
  }

  public activateEmail(userId: string) {
    return this.http.put('adminUsers/emailActivation', {userId: userId});
  }

  public activatePhone(userId: string) {
    return this.http.put('adminUsers/phoneActivation', {userId: userId});
  }

}
