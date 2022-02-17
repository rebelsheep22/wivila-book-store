import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageGuard } from 'src/helpers/user.guard';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { BooksPanelComponent } from './components/books-panel/books-panel.component';
import { CartComponent } from './components/cart/cart.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MyBooksComponent } from './components/my-books/my-books.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { ViewAllComponent } from './components/view-all/view-all.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component:RegistrationPageComponent},
  {path: 'cart', component: CartComponent},
  {path: 'myBooks', component: MyBooksComponent},
  {path: 'admin', component: AdminPanelComponent,canActivate: [UserPageGuard]},
  {path: 'books', component: BooksPanelComponent,canActivate: [UserPageGuard]},
  {path: 'viewAll/:category', component: ViewAllComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
