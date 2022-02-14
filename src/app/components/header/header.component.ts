import {  HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faAddressBook, faBible, faBook, faBookOpen, faBookQuran, faBookSkull, faBoxOpen, faHome, faSignIn, faUsers } from '@fortawesome/free-solid-svg-icons';
import { BookService } from 'src/services/book.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 loggedUser = JSON.parse(sessionStorage.getItem('loggedUser')!)
  faBook = faBook
  faUsers = faUsers
  faAddressBook= faAddressBook;
  faHome= faHome;
  faOpenBook = faBookOpen;
  faBible = faBible;
  faSignIn= faSignIn;
  filterForm! : FormGroup;
  constructor( private router : Router,private formBuilder: FormBuilder, private bookService: BookService) { }

  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      searchByName: [null]
    })
    console.log()
  }
  goToLogin():void{
    this.router.navigateByUrl('/login')
  }
  goToRegister():void{
    this.router.navigateByUrl('/register')
  }
  goToHome():void{
    this.router.navigateByUrl('')
  }
  search():void{
    this.bookService.getBooksByName(this.filterForm.controls["searchByName"].value).subscribe()

  }
  navigateAdmin():void{
    this.router.navigateByUrl('/admin')
  }
}
