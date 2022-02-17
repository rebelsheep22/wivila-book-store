import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BookService } from 'src/services/book.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.scss']
})
export class MyBooksComponent implements OnInit {
  books$: any;
  readingUrl!: string;
  pdf$: Blob | undefined;
  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getUserBooks().subscribe((res) => {
      this.books$ = res;
    })
  }

  goBack(): void {
    this.router.navigate(['']);
  }
  
  showPDF(fileName: string): void {
    const formattedFileName = this.formatName(fileName);
    this.bookService.getBookPdf(formattedFileName).subscribe(data => {
      this.pdf$ = new Blob([data], { type: 'application/pdf' });
      var bookUrl = window.URL.createObjectURL(data);
      window.open(bookUrl)
    });
  }

  private formatName(url: string): string {
    var formatted;
    if(url.includes("\\")){
      formatted = url.split('\\').join('/').replace(environment.fileUrl,"")
    }
    else {
      formatted = url.replace(environment.fileUrl,"")
    }
    
    return formatted;
  }
}
