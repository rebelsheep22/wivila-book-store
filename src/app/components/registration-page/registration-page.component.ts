import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from 'src/services/registration.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
  registerForm!: FormGroup;
  isVisible = false;

  constructor(
    private formBuilder: FormBuilder,
    private registrationService: RegistrationService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]]
    })
  }
  registerUser(){
    const username = this.registerForm.controls['username'].value;
    const password = this.registerForm.controls['password'].value;
    const email = this.registerForm.controls['email'].value;
    if (this.registerForm.invalid)return;
    this.registrationService.register({email, password, username}).subscribe(
      ()=> {  
        this.isVisible = true;
        setTimeout(() => {
        this.registerForm.reset();
        this.isVisible = false
        }, 500);
      }
    );
  }
}
