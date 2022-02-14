import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http:HttpClient
  ) { }
  getUsers(){

    const loggedUser = JSON.parse(sessionStorage.getItem('loggedUser')!)
    const HttpHeader : HttpHeaders = new HttpHeaders({
      'accept' : '*/*',
      'Authorization' : 'Bearer ' + loggedUser.token
    })
    const beqa = 'beqa'
    return this.http.get(`${environment.apiUrl}/users/`, {headers: HttpHeader})
  }
}
