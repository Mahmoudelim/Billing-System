import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup  ;

  constructor(private formBuilder: FormBuilder,private router: Router,private appComponent: AppComponent) { }

  ngOnInit(): void {

    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expirationDate: ['', Validators.required],
      cvv: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const user = new User(
      this.registrationForm.value.firstName,
      this.registrationForm.value.lastName,
      this.registrationForm.value.email,
      this.registrationForm.value.password,
      this.registrationForm.value.cardNumber,
      this.registrationForm.value.expirationDate,
      this.registrationForm.value.cvv
    );
    console.log(user);
    // TODO: Save user data to database
  }
}
