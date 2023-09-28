import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/Models/iuser';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-user-template-driven-form',
  templateUrl: './user-template-driven-form.component.html',
  styleUrls: ['./user-template-driven-form.component.scss'],
})
export class UserTemplateDrivenFormComponent {
  user: Iuser = {} as Iuser;
  constructor(private userService: UsersService, private router: Router) {}
  addNewUser() {
    // static data
    // let u: Iuser = {
    //   firstName: 'Yara',
    //   lastName: 'Sayed',
    //   email: 'asd@gmail.com',
    // };

    // this.userService.signUpUser(u).subscribe({
    //   next:(data)=>{
    //     console.log(data);
    //     this.router.navigate(['/Products']);
    //   },
    //   error:(err)=>{
    //     console.log(err);

    //   }
    // });

    // second case
    this.userService.signUpUser(this.user).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/Products']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
