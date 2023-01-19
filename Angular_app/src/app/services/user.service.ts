import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from '../../environments/environment.dev';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  addUsers(user: any){
    
    
    return this.httpClient.post(environment.user.BASE_URL,user);
  }

  getUsers(){
    
    
    return this.httpClient.get(environment.user.BASE_URL);
  }
}
