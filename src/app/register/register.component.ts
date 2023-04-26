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
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]],

      cardNumber: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern('^[0-9]+$')]],
      expirationDate: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/([0-9]{4}|[0-9]{2})$')]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern('^[0-9]+$')]]
    });
  }


  onSubmit(): void {
    if (this.registrationForm.valid){
    const user = new User(
      this.registrationForm.value.firstName,
      this.registrationForm.value.lastName,
      this.registrationForm.value.email,
      this.registrationForm.value.password,
      this.registrationForm.value.cardNumber,
      this.registrationForm.value.expirationDate,
      this.registrationForm.value.cvv,
      90,
      80,
      70,
      new Date(10/5/2023),
      new Date(10/5/2023),
      new Date(10/5/2023),

    );
    console.log(user);
    }
    else if(!this.registrationForm.valid) {
      console.log("data not valid")
    }

    // TODO: Save user data to database
  }
}
