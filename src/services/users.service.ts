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
  loggedUser = JSON.parse(sessionStorage.getItem('loggedUser')!)
   HttpHeader : HttpHeaders = new HttpHeaders({
    'accept' : '*/*',
    'Authorization' : 'Bearer ' + this.loggedUser.token
  })

  getUsers(){

    return this.http.get(`${environment.apiUrl}/users/`, {headers: this.HttpHeader})
  }
  deleteUser(id:number){
    return this.http.delete(`${environment.apiUrl}/users/delete/`+id, {headers: this.HttpHeader})
  }
  updateUser(id:number, body:any){
    console.log(id);
    console.log(body)
    return this.http.put(`${environment.apiUrl}/users/update/`+id, body, {headers: this.HttpHeader})
  }
}
