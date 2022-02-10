import { Component, OnInit } from '@angular/core';
import { faAddressBook, faBible, faBook, faBookOpen, faBookQuran, faBookSkull, faBoxOpen, faHome, faSignIn, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faBook = faBook
  faUsers = faUsers
  faAddressBook= faAddressBook;
  faHome= faHome;
  faOpenBook = faBookOpen;
  faBible = faBible;
  faSignIn= faSignIn;
  constructor() { }

  ngOnInit(): void {

  }
  log():void{
    console.log("vano ylea")
  }

}
