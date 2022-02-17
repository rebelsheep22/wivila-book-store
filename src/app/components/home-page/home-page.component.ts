import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { faDollar } from '@fortawesome/free-solid-svg-icons';
import { BookService } from 'src/services/book.service';
import { CartService } from 'src/services/cart.service';
import { ViewDetailsComponent } from '../view-details/view-details.component';

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
    private bookService: BookService,
    private dialog: MatDialog,
    private router: Router,
    private cartService: CartService
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
  viewDetails(book: any){
    const dialogRef = this.dialog.open(ViewDetailsComponent, {
      data: book,
      width: '400px',
    });
  }
  addToCart(d:any){
    this.cartService.addToCart(d)
  }
  openFullPost(book:any):void{
    const routerString = "viewAll/"+book;
    this.router.navigate([routerString]);
  }
}
