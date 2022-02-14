import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http:HttpClient
  ) { }
  getBooks(){
    // return this.http.get<Book>(`${environment.apiUrl}/posts/${id}`)
    // return this.http.get<Book>(`${environment.apiUrl}/getBooks`)
    return this.http.get(`${environment.apiUrl}/books/getBooks`)
  }
  getComics(){
    return this.http.get(`${environment.apiUrl}/books/getBook/category/comics`)
  }
  getProgramming(){
    return this.http.get(`${environment.apiUrl}/books/getBook/category/programming`)
  }
  getNovels(){
    return this.http.get(`${environment.apiUrl}/books/getBook/category/novels`)
  }
  getBooksByName(name: string){

    // const loggedUser = JSON.parse(sessionStorage.getItem('loggedUser')!)
    // const HttpHeader : HttpHeaders = new HttpHeaders({
    //   'accept' : '*/*',
    //   'Authorization' : 'Bearer ' + loggedUser.token
    // })
    return this.http.get(`${environment.apiUrl}/books/getBook/`+name)
    // return this.http.get(`${environment.apiUrl}/books/getBook/`+name, {headers: HttpHeader})
  }
}
