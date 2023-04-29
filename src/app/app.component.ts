import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { User } from './user';
import('firebase/compat/database');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'billingSystem';

 issignedin=false;
  constructor(public router: Router,public Auth:AuthenticationService) {
    
  }
  
  ngOnInit(){
    
  }
 /* async onsignup(email:string,password:string){
    await this.Auth.register(email,password)
    if(this.Auth.isloggein){
      this.issignedin=true;
    }
  }
  async onsignin(email:string,password:string){
    await this.Auth.register(email,password)
    if(this.Auth.isloggein){
      this.issignedin=true;
    }
  }
  handlelogout(){
    this.issignedin=false;
  }*/
  
}
