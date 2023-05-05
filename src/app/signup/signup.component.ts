import {  phonePayment } from './../Model/phonePayment';
import { ElectricitPayment } from './../Model/ElectricitPayment';
import { Component } from '@angular/core';
import { UserService } from './../user.service';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { AuthenticationService } from '../authentication.service';
import { CrudServicesService } from '../crud-services.service';
import { WaterPayment } from '../Model/WaterPayment';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registrationForm!: FormGroup  ;
  issignedin=false;

  constructor(private crud:CrudServicesService,private formBuilder: FormBuilder,private router: Router,public auth:AuthenticationService,private appComponent: AppComponent,private UserService:UserService) { }

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
    if(localStorage.getItem('User')!==null){
      this.issignedin=true;
    }
    else{
      this.issignedin=false;
    }
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
      true,
      140

    );
    this.auth.register(this.registrationForm.value.email,this.registrationForm.value.password);
    console.log(user);
    const Waterpayment=new WaterPayment(user.email,new Date(10/5/2023),0,0)
    this.crud.getWaterRef().push(Waterpayment);
    const electricitPayment=new ElectricitPayment(user.email,new Date(10/5/2023),0,0)
    this.crud.getWaterRef().push(electricitPayment);
    const PhonePayment=new phonePayment(user.email,new Date(10/5/2023),0,0,0,false)
    this.crud.getphonePaymentRef().push(PhonePayment);
    this.UserService.addUser(user);
   // this.router.navigate(['/login']);
    }
    else if(!this.registrationForm.valid) {
      console.log("data not valid")

    }
  }
}
