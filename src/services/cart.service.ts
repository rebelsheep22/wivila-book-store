import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  cart: any = [];
  addToCart(book: any) {
    let result = this.cart.find(({name}: {name:any}) => name === book.name)
    if(result) return;
    this.cart.push(book);
    console.log(this.cart);
  }
  returnCart(){
    return this.cart;
  }

}
