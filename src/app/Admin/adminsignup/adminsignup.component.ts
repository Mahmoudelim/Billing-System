import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{Admin}from 'src/app/Model/admin';
import { AppComponent } from 'src/app/app.component';
import { AuthenticationService } from 'src/app/authentication.service';
import { AdminServiceService } from '../admin-service.service';
@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css']
})
export class AdminsignupComponent {
  registrationForm!: FormGroup ;
  issignedin=false;

  constructor(private formBuilder: FormBuilder,private router: Router,public auth:AuthenticationService,private appComponent: AppComponent,private adminservice:AdminServiceService) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]]
    });
    if(localStorage.getItem('Admin')!==null){
      this.issignedin=true;
    }
    else{
      this.issignedin=false;
    }
  }



  onSubmit(): void {
    if (this.registrationForm.valid){
    const admin = new Admin(
      this.registrationForm.value.firstName,
      this.registrationForm.value.lastName,
      this.registrationForm.value.email,
      this.registrationForm.value.password,

    );
    this.auth.adminregister(this.registrationForm.value.email,this.registrationForm.value.password);
    console.log(admin);
   this.adminservice.addadmin(admin);
    if(this.auth.isloggein){
      this.issignedin=true;
    }
    }
    else if(!this.registrationForm.valid) {
      console.log("data not valid")

    }
  }
}
