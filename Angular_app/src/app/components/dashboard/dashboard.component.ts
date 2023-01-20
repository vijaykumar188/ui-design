import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private userService: UserService, private router: Router) { }

  headers = ["sr_no", "name", "tech", "sub"]
  tabledata: any = []
  card: any = []


  ngOnInit() {
    this.getUserList();
    this.getCardList();
  }

  getUserList() {


    this.userService.getUsers().subscribe(res => {

      console.log(res);
      this.tabledata = res;
    })
  }



  getCardList() {


    this.userService.getCards().subscribe(res => {

      console.log(res);
      this.card = res;
    })
  }

  signout() {
    this.router.navigate(['/login']);
  }
}
