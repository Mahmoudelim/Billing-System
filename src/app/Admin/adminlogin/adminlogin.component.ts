import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  issignedin=false;
  isadmin =false;

  email : string = '';
  password : string = '';

  constructor(public auth : AuthenticationService) { }



  login() {


    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }

    this.auth.loginadmin(this.email,this.password);
    this.email = '';
    this.password = '';

  }
  signInWithGoogle() {
    this.auth.googleSignIn();
  }
  ngOnInit(){
    if(localStorage.getItem('Admin')!==null){
      this.issignedin=true;

    }
    else{
      this.issignedin=false;
    }
  }



}
