import { HttpClient } from '@angular/common/http';
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
}
