import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Model/user';
import { LoginCredentials } from '../Model/login-credentials';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  base_url = "http://aed780fe13f2a47e98ec2bc8c6871cd6-1844585885.us-east-1.elb.amazonaws.com:8082/";
  constructor(private http: HttpClient) {   }

  public getUser(userId:number):Observable <any>{
    
    return this.http.get<User>(this.base_url+`user/${userId}`);
    
  }
  public loginUser(loginCredentials:LoginCredentials):Observable <any>{
    
    return this.http.post<User>(this.base_url+'login', loginCredentials);
    
  }
  public registerUser(User:User):Observable <any>{
    
    return this.http.post<User>(this.base_url+'signup', User);
    
  }
}
