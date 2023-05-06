import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider} from '@angular/fire/auth';
import { User } from './user';
import { Admin } from './Model/admin';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

import firebase from 'firebase/compat/app';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
   userData: Observable<firebase.User | null> | undefined;

  isloggein=false;
  sucess=false;
  constructor(public fireauth : AngularFireAuth, private router : Router,public db: AngularFireDatabase) {
    this.userData = fireauth.authState;
    const user = this.fireauth.currentUser;
  }
 


  login(email : string, password : string) {
    this.fireauth.signInWithEmailAndPassword(email,password).then( res => {
        localStorage.setItem('User',JSON.stringify(res.user));
        this.fireauth.authState.subscribe(user => {
          if (user) {
            alert('welcome '+user.email);
          } 
        });
        if(res.user?.emailVerified == true) {
          this.router.navigate(['userhome']);
          this.isloggein=true;

        } else {
          this.router.navigate(['/userhome']);
        }

    }, err => {
        alert(err.message);
        this.isloggein=false;

        this.router.navigate(['/login']);
    })
    
    
  }


  // register  user
  register(email : string, password : string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then( res => {
      localStorage.setItem('User',JSON.stringify(res.user));
      this.sucess=true;
      alert('Registration Successful');
      this.sendEmailForVarification(res.user);
      this.isloggein=true;
      //this.router.navigate(['/login']);
      
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }

  //login Admin

  loginadmin(email : string, password : string) {
    this.fireauth.signInWithEmailAndPassword(email,password).then( res => {
      
      this.isloggein=true;
        localStorage.setItem('Admin',JSON.stringify(res.user));
        this.fireauth.authState.subscribe(user => {
          if (user) {
            alert('welcome '+user.email);            

          } 
        });
        if(res.user?.emailVerified == true) {
          this.router.navigate(['toAdminDashboard']);
        } else {
          alert('verfy email')
          this.router.navigate(['/login']);
        }

    }, err => {
        alert(err.message );
        this.router.navigate(['/login']);
    })
  }

// register Admin
adminregister(email : string, password : string) {
  this.fireauth.createUserWithEmailAndPassword(email, password).then( res => {
    localStorage.setItem('Admin',JSON.stringify(res.user));
    this.sucess=true;
    alert('Registration Successful');
    this.sendEmailForVarification(res.user);
    this.isloggein=false;
    //this.router.navigate(['/login']);
    
  }, err => {
    alert(err.message);
    this.router.navigate(['/register']);
  })
}
  // sign out
  logout() {
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    })
  }
    forgotPassword(email : string) {
      this.fireauth.sendPasswordResetEmail(email).then(() => {
        this.router.navigate(['/varify-email']);
      }, err => {
        alert('Something went wrong');
      })
  }
  // email varification
  sendEmailForVarification(user : any) {
    console.log(user);
    user.sendEmailVerification().then((res : any) => {
      this.router.navigate(['/varify-email']);
      
      this.router.navigate(['/login']);
    }, (err : any) => {
      alert('Something went wrong. Not able to send mail to your email.')
    })
  }
  //sign in with google
  googleSignIn() {
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res => {

      this.router.navigate(['/dashboard']);
      localStorage.setItem('token',JSON.stringify(res.user?.uid));

    }, err => {
      alert(err.message);
    })
  }

}
