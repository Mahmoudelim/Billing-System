import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  template: `<div class="container">
  <form [formGroup]="registrationForm" (ngSubmit)="onSubmit()">
    <div class="row">
      <div class="col-md-6">
        <h3>Personal Information</h3>
        <hr>
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input type="text" class="form-control" placeholder="Enter your first name" formControlName="firstName" required>
        </div>
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="text" class="form-control" placeholder="Enter your seconed name" formControlName="lastName" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" placeholder="Enter your email" formControlName="email" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" placeholder="Enter your password" formControlName="password" required>
        </div>
        <h3>Billing Information</h3>
        <hr>
        <div class="form-group">
          <label for="cardNumber">Card Number</label>
          <input type="text" class="form-control" placeholder="Enter your card number"formControlName="cardNumber" required>
        </div>
        <div class="form-group">
          <label for="expirationDate">Expiration Date</label>
          <input type="text" class="form-control" placeholder="Enter your Expiration Date" formControlName="expirationDate" required>
        </div>
        <div class="form-group">
          <label for="cvv">CVV</label>
          <input type="text" placeholder="enter your cvv" class="form-control" formControlName="cvv" required>
        </div>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    <br>
    <button  [routerLink]="['/login']">Go to Login</button>
    <router-outlet></router-outlet>

  </form>
</div>

`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'billingSystem';
registrationForm!: FormGroup  ;

constructor(private formBuilder: FormBuilder,private router: Router) { }

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
