import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { AuthenticationService } from '../authentication.service';
import { Route } from '@angular/router';
import { LoadingDialogComponent } from '../loading-dialog/loading-dialog.component';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  issignedin=false;
  invalidLogin: boolean=false;
  email : string = '';
  password : string = '';
  doctors$: Observable<any[]> | undefined;

  constructor(public auth : AuthenticationService,private db: AngularFireDatabase) {
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

    this.db.list('/users').valueChanges().subscribe(users => {
      const validuser = users.find((user: any) => user.email === this.email);
      if (validuser) {
        // User is an admin, allow login
        this.auth.login(this.email,this.password);
    this.email = '';
    this.password = '';
        console.log('Login successful');
      } else {
        // User is not an admin, display error message
        alert('You Are Admin');
      }
    });
    if(this.auth.isloggein!=true){

      this.invalidLogin = false;

    }

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
