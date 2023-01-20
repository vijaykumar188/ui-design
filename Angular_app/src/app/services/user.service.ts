import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment.dev';
import { User } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }


  selectedUser : User = {
    
    fullName: '',
    email : '',
    password : ''
  };
  
  
  
  addUsers(user: any) {


    return this.httpClient.post(environment.user.BASE_URL, user);
  }

  getUsers() {


    return this.httpClient.get(environment.details.USER_URL);
  }

  getCards() {


    return this.httpClient.get(environment.user.card_URL);
  }
}
