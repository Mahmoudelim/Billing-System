import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { AuthenticationService } from '../authentication.service';
import { Route } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string = '';
  password : string = '';

  constructor(private auth : AuthenticationService) { }

  ngOnInit(): void {
  }

  login() {

    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }

    this.auth.login(this.email,this.password);
    this.email = '';
    this.password = '';

  }
  signInWithGoogle() {
    this.auth.googleSignIn();
  }

  
}
