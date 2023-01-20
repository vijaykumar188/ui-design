import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm !: FormGroup

  constructor(private router: Router, private formbuilder: FormBuilder, private http: HttpClient, private userservice: UserService) { }



  ngOnInit() {
    
    this.loginForm = this.formbuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    })
  }


  email='';
  password='';
  
  signin() {




    this.router.navigate(['/dashboard'])
  }

  signup() {
    this.router.navigate(['/signup'])
  }
  onSubmit(){


    console.log('Email:',this.email);
    console.log('password:',this.password);

    this.router.navigate(['/dashboard'])
   

   
  }
  
}


