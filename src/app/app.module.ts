import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FullPageBookComponent } from './components/full-page-book/full-page-book.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { BooksPanelComponent } from './components/books-panel/books-panel.component';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { ViewAllComponent } from './components/view-all/view-all.component';
import { SearchModalComponent } from './components/search-modal/search-modal.component';
import { CartComponent } from './components/cart/cart.component';
import { MyBooksComponent } from './components/my-books/my-books.component';
import { UploadBookComponent } from './components/upload-book/upload-book.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    FullPageBookComponent,
    AdminPanelComponent,
    EditUserComponent,
    BooksPanelComponent,
    CreateBookComponent,
    EditBookComponent,
    ViewDetailsComponent,
    ViewAllComponent,
    SearchModalComponent,
    CartComponent,
    MyBooksComponent,
    UploadBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AngularSvgIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
