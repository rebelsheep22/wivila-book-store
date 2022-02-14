import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from 'src/models/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }
  login(body:Users){
    return this.http.post(`${environment.apiUrl}/auth/signIn`, body)
  }
  // isAuthenticated():boolean{

  // }
}
