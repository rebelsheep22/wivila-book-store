import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    })
  }
  logIn(): void{
    const username = this.loginForm.controls['username'].value;
    const password = this.loginForm.controls['password'].value;
    this.authService.login({username,password}).subscribe(
      (res)=>{
        this.router.navigateByUrl("")
        sessionStorage.setItem('loggedUser', JSON.stringify(res));
      }
    )
  }
  goToRegister():void{
    this.router.navigateByUrl('/register')
  }
}
