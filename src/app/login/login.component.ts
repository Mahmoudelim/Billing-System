import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { AuthenticationService } from '../authentication.service';
import { Route } from '@angular/router';
import { LoadingDialogComponent } from '../loading-dialog/loading-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  issignedin=false;

  email : string = '';
  password : string = '';

  constructor(private auth : AuthenticationService) { }

  

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
  ngOnInit(){
    if(localStorage.getItem('User')!==null){
      this.issignedin=true;
      
    }
    else{
      this.issignedin=false;
    }
  }
  
  async onsignin(email:string,password:string){
     this.auth.register(email,password)
    if(this.auth.isloggein){
      this.issignedin=true;
    }
  }
  
  
}
