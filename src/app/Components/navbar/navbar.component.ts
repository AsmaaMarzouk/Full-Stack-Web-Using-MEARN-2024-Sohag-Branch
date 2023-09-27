import { Component, OnInit } from '@angular/core';
import { UserAuthenService } from 'src/app/Services/user-authen.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
userLogg:boolean;

constructor(private userAuthService:UserAuthenService){
this.userLogg=this.userAuthService.isUserLogged;
// console.log(this.userLogg);

}
  ngOnInit(): void {

    this.userAuthService.getUserLoggedStatus().subscribe({
      next:(userStatus)=>{
        this.userLogg=userStatus;
        console.log(this.userLogg);


      },
      error:(err)=>{
        console.log(err);

      }
    })
  }


}
