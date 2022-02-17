import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/services/book.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.scss']
})
export class MyBooksComponent implements OnInit {
  books$ : any;
  readingUrl!: string;
  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getUserBooks().subscribe((res)=>{
      this.books$ = res;
    })
    this.readingUrl = "C:/Users/wivil/Desktop/demo/src/main/resources/Books/a_clockwork_orange.pdf"
  }
  goBack(): void {
    this.router.navigate(['']);
  }
  read(url:string):void{
    console.log(url)
    window.open(url)
  }
}
