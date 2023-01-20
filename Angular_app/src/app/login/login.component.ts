import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // public loginForm !: FormGroup

  constructor(private router: Router, private formbuilder: FormBuilder, 
    private http: HttpClient, private userservice: UserService,
    private toastr:ToastrService) { }



  ngOnInit() {
    
    // this.loginForm = this.formbuilder.group({
    //   email: ['', Validators.compose([Validators.required, Validators.email])],
    //   password: ['', Validators.required]
    // })

    
  }


  email='';
  password='';
  
 

  signup() {
    this.router.navigate(['/signup'])
  }

  onSubmit(){
    this.toastr.success('Login Success', '');
   
    console.log('Email:',this.email);
    console.log('password:',this.password);

    this.router.navigate(['/dashboard'])
}

  
}


