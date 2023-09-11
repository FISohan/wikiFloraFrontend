import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  addUser(user:any):Observable<User>{
    return this.http.post<User>(environment.baseUrl + "User",user);
  }

  isUserExist():Observable<boolean>{
    return this.http.get<boolean>(environment.baseUrl + "User/existed");
  }

  getUser(userId:string):Observable<User>{
      return this.http.get<User>(environment.baseUrl + `User/${userId}`)
  }
  getTopContibuter():Observable<User[]>{
    return this.http.get<User[]>(environment.baseUrl+"user/topContributer");
  }
  updateUser(updatedUser:any):Observable<boolean>{
    return this.http.put<boolean>(environment.baseUrl+"user/update",updatedUser,{headers:{
      "Content-Type": "application/json, text/plain, */*"
    }});
}
}
