import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.scss'],
})
export class UserReactiveFormComponent {
  userForm: FormGroup;

  constructor(private formbuilder: FormBuilder) {
    // this.userForm=new FormGroup({
    //   firstName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    //   lastName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]{3,}')]),
    //   email:new FormControl('',[Validators.required,Validators.email])
    // })

    this.userForm = this.formbuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z]{3,}')]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get firstName(){
    return this.userForm.get('firstName');
  }
}
