import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../Models/iuser';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
httpheader={};
  constructor(private httpclient:HttpClient) {
    this.httpheader={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
  }

  signUpUser(user:Iuser):Observable<Iuser> {
    return this.httpclient.post<Iuser>(`${environment.BaseApiURL}/users`,JSON.stringify(user),this.httpheader).pipe(
      retry(3),
      catchError((err)=>{
        return throwError(()=>{
          // return new Error(err)
          return new Error('Error while signing up')
        })
      })
    )

  }
}
