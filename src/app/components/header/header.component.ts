import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  faAddressBook,
  faBible,
  faBook,
  faBookOpen,
  faBookQuran,
  faBookSkull,
  faBoxOpen,
  faCartPlus,
  faCartShopping,
  faHome,
  faSignIn,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { BookService } from 'src/services/book.service';
import { SearchModalComponent } from '../search-modal/search-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  loggedUser = JSON.parse(sessionStorage.getItem('loggedUser')!);
  faBook = faBook;
  faUsers = faUsers;
  faAddressBook = faAddressBook;
  faHome = faHome;
  faOpenBook = faBookOpen;
  faBible = faBible;
  faSignIn = faSignIn;
  faCart = faCartShopping;
  filterForm!: FormGroup;
  logOut = false;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private bookService: BookService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      searchByName: [null],
    });
    if (this.loggedUser) {
      this.logOut = true;
    }
  }
  goToLogin(): void {
    this.router.navigateByUrl('/login');
    sessionStorage.clear();
  }
  goToRegister(): void {
    this.router.navigateByUrl('/register');
  }
  goToHome(): void {
    this.router.navigateByUrl('');
  }
  search(): void {
    let book;
    this.bookService
      .getBooksByName(this.filterForm.controls['searchByName'].value)
      .subscribe((res) => {
        book = res;
        console.log(res)
        const dialogRef = this.dialog.open(SearchModalComponent, {
          data: book,
          width: '400px',
        });
      }, (error => {
        const dialogRef = this.dialog.open(SearchModalComponent, {
          width: '400px',
        });
      }));

  }
  navigateAdmin(): void {
    this.router.navigateByUrl('/admin');
  }
  goToCart():void{
    this.router.navigateByUrl('/cart')
  }
  navigateBooks(): void {
    this.router.navigateByUrl('/books');
  }
  goToMyBooks():void{
    this.router.navigateByUrl('/myBooks')
  }
}
