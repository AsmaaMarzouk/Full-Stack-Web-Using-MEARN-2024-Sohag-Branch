import { Component, OnInit } from '@angular/core';
import { UserAuthenService } from 'src/app/Services/user-authen.service';

@Component({
  selector: 'app-user-authen',
  templateUrl: './user-authen.component.html',
  styleUrls: ['./user-authen.component.scss']
})
export class UserAuthenComponent implements OnInit {
  userLog:boolean=true;
constructor(private userAuthService:UserAuthenService){

}
  ngOnInit(): void {

    this.userLog=this.userAuthService.isUserLogged;
    // console.log(this.userLog);

  }

  loginFunc(){

    this.userAuthService.login("test@gmail.com","22222");
    this.userLog=this.userAuthService.isUserLogged;
  }
  logOutFunc(){
    this.userAuthService.logout();
    this.userLog=this.userAuthService.isUserLogged;
  }
}
