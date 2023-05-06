import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
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
  doctors$: Observable<any[]> | undefined;

  constructor(public auth : AuthenticationService,private db: AngularFireDatabase) { }



  login() {

  
    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }
    this.db.list('/admins').valueChanges().subscribe(admins => {
      const validAdmin = admins.find((admin: any) => admin.email === this.email);
      if (validAdmin) {
        // User is an admin, allow login
        this.auth.loginadmin(this.email,this.password);
    this.email = '';
    this.password = '';
        console.log('Login successful');
      } else {
        // User is not an admin, display error message
        alert('You Are A user');
      }
    });
    

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
