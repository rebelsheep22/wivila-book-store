import { Component, OnInit } from '@angular/core';
import { faDollar } from '@fortawesome/free-solid-svg-icons';
import { BookService } from 'src/services/book.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  faDollar= faDollar;
books$: any;
splicedBooks$:any;
novels$:any;
comics$:any;
programming$:any;

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.getBooks();
    this.getComics();
    this.getProgramming();
    this.getNovels();
  }
  getBooks(){
    return this.bookService.getBooks().subscribe((res)=>{
     this.books$ = res;
    })
  }
  getComics(){
    return this.bookService.getComics().subscribe((res: any)=>{
      this.comics$ = res.splice(0,4);
    })
  }
  getProgramming(){
    return this.bookService.getProgramming().subscribe((res:any)=>{
      this.programming$ = res.splice(0,4);
    })
  }
  getNovels(){
    return this.bookService.getNovels().subscribe((res:any)=>{
      this.novels$ = res.splice(0,4);
    })
  }

}
