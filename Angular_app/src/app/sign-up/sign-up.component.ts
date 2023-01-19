import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  constructor(private router: Router, private userservice: UserService ) { }

  signin() {
    this.router.navigate(['/login'])
  }

  signUp(){

    //this.userservice.addUsers().subscribe( res => {

    //})

  }
}
