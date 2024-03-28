import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  baseUrl: string = environment.apiDomain + "/api/User";

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl);
  }

  addUser(u:User):Observable<void>{
    return this.http.post<void>(this.baseUrl,u);
  }
}
