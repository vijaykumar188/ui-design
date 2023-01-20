import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],

})
export class SignUpComponent {

  constructor(private router: Router, private userservice: UserService ,private toastr:ToastrService) { }

  

  signUp(){
    this.toastr.success('User Added Success', '');
    this.router.navigate(['/login'])
    }
}
