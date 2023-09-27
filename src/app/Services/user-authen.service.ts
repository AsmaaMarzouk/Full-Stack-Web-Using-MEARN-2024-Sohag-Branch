import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthenService {
  userLoggedBehavior: BehaviorSubject<boolean>;
  constructor() {
    this.userLoggedBehavior = new BehaviorSubject<boolean>(this.isUserLogged);
  }

  login(userEmail: string, userPassword: string) {
    let token = '543219';
    localStorage.setItem('userToken', token);
    this.userLoggedBehavior.next(true);
  }
  logout(){
    localStorage.removeItem('userToken');
    this.userLoggedBehavior.next(false);
  }

  get isUserLogged(): boolean {
    return localStorage.getItem('userToken') ? true : false;
  }
  getUserLoggedStatus():Observable<boolean> {

    return this.userLoggedBehavior.asObservable();
  }
}
