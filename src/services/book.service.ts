import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from 'src/models/book';
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
  deleteBook(id:number){
    let loggedUser = JSON.parse(sessionStorage.getItem('loggedUser')!)
    let HttpHeader : HttpHeaders = new HttpHeaders({
     'accept' : '*/*',
     'Authorization' : 'Bearer ' + loggedUser.token
   })
    return this.http.delete(`${environment.apiUrl}/books/delete/`+id, {headers: HttpHeader})
  }
  createBook(body :Book){
    let loggedUser = JSON.parse(sessionStorage.getItem('loggedUser')!)
    let HttpHeader : HttpHeaders = new HttpHeaders({
     'accept' : '*/*',
     'Authorization' : 'Bearer ' + loggedUser.token
   })
    return this.http.post(`${environment.apiUrl}/books/create`,body,  {headers: HttpHeader})
  }
  updateBook(id:number, body:any){
    let loggedUser = JSON.parse(sessionStorage.getItem('loggedUser')!)
    let HttpHeader : HttpHeaders = new HttpHeaders({
     'accept' : '*/*',
     'Authorization' : 'Bearer ' + loggedUser.token
   })
    return this.http.put(`${environment.apiUrl}/books/update/`+id, body, {headers: HttpHeader})
  }
  checkout( body:any){
    let loggedUser = JSON.parse(sessionStorage.getItem('loggedUser')!)
    let HttpHeader : HttpHeaders = new HttpHeaders({
     'accept' : '*/*',
     'Authorization' : 'Bearer ' + loggedUser.token
   })
    return this.http.post(`${environment.apiUrl}/users/books/`+ loggedUser.username, body,  {headers: HttpHeader})
  }
  getUserBooks(){
    let loggedUser = JSON.parse(sessionStorage.getItem('loggedUser')!)
    let HttpHeader : HttpHeaders = new HttpHeaders({
     'accept' : '*/*',
     'Authorization' : 'Bearer ' + loggedUser.token
   })
    return this.http.get(`${environment.apiUrl}/users/books/`+ loggedUser.username, {headers: HttpHeader})
  }
  uploadBook(id:number, file:FormData){
    let loggedUser = JSON.parse(sessionStorage.getItem('loggedUser')!)
    let HttpHeader : HttpHeaders = new HttpHeaders({
     'accept' : '*/*',
     'Authorization' : 'Bearer ' + loggedUser.token
   })
   return this.http.post(`${environment.apiUrl}/books/uploadFile/${id}`, file, {headers: HttpHeader})
  }
  getBookPdf(filename: string){
    let loggedUser = JSON.parse(sessionStorage.getItem('loggedUser')!)
    let HttpHeader : HttpHeaders = new HttpHeaders({
      'Accept': 'application/pdf',
      'Authorization' : 'Bearer ' + loggedUser.token
    })
    return this.http.get(`${environment.apiUrl}/books/getFile/${filename}`, {headers: HttpHeader, responseType: 'blob' })
  }
}
