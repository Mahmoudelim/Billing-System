import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import('firebase/database');
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  issignedin=false;
  email : string = '';
  password : string = '';
  formData = {
    
    email: '',
    password: ''
  };
  constructor(private auth : AuthenticationService,private db:AngularFireDatabase,private firestore: AngularFirestore) {

   }
   submitForm() {
    this.firestore.collection('users').add(this.formData);
    this.formData = {  email: '', password: '' };
  }

  

  register() {

    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }

    this.auth.register(this.email,this.password);
    
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
  async onsignup(email:string,password:string){
     this.auth.register(email,password)
    if(this.auth.isloggein){
      this.issignedin=true;
    }
  }
  
 
}
