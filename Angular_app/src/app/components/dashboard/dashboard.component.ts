import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private userService:UserService,private router: Router){}

  headers = ["id","name", "tech", "sub"]
  tabledata : any= []

    // {
    //   ID: "1",
    //   NAME: "4ft",
    //   AGE: "2",
    //   GENDER: "MALE",
    //   COUNTRY: "INDIA"
    // },
    // {
    //   ID: "2",
    //   NAME: "4ft",
    //   AGE: "2",
    //   GENDER: "MALE",
    //   COUNTRY: "INDIA"
    // },
    // {
    //   ID: "3",
    //   NAME: "4ft",
    //   AGE: "2",
    //   GENDER: "MALE",
    //   COUNTRY: "INDIA"
    // },
    // {
    //   ID: "1",
    //   NAME: "4ft",
    //   AGE: "2",
    //   GENDER: "MALE",
    //   COUNTRY: "INDIA"
    // },
    // {
    //   ID: "2",
    //   NAME: "4ft",
    //   AGE: "2",
    //   GENDER: "MALE",
    //   COUNTRY: "INDIA"
    // },
    // {
    // ID: "1",
    //   NAME: "4ft",
    //   AGE: "2",
    //   GENDER: "MALE",
    //   COUNTRY: "INDIA"
    // },
    // {
    //   ID: "2",
    //   NAME: "4ft",
    //   AGE: "2",
    //   GENDER: "MALE",
    //   COUNTRY: "INDIA"
    // },
    // {
    //   ID: "1",
    //   NAME: "4ft",
    //   AGE: "2",
    //   GENDER: "MALE",
    //   COUNTRY: "INDIA"
    // },
    // {
    //   ID: "2",
    //   NAME: "4ft",
    //   AGE: "2",
    //   GENDER: "MALE",
    //   COUNTRY: "INDIA"
    // },

  //]
  ngOnInit(){
    this.getUserList();

  }

   getUserList(){
  

    this.userService.getUsers().subscribe(res => {

      console.log(res);
      this.tabledata = res;
    })
  }

    addUserList(){
     
    
        // this.userService.addUsers(user).subscribe(res => {
    
        //   console.log(res);
        //   this.tabledata = res;
        //})

    
  
    
  
    
  }

  signout(){
    this.router.navigate(['/login'])
  }
}
