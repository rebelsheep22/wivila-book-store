import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/services/book.service';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService, private router: Router, private bookService :BookService) { }
  cart$: any;
  ngOnInit(): void {
   this.cart$= this.cartService.returnCart();
   console.log(this.cart$)
  }
  goBack(): void {
    this.router.navigate(['']);
  }
  checkout(){
    if(confirm("Do you want to checkout books")){
    this.bookService.checkout(this.cart$).subscribe(()=>{
      location.reload();
    });
  }}
}
