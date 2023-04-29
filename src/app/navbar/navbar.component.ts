import { Component } from '@angular/core';
import {  EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  @Output() islogeout =new EventEmitter<void>() 
  issignedin=true;
constructor(public Auth:AuthenticationService){}
  logout()
  {
    this.Auth.logout();
    this.islogeout.emit();
  }
  handlelogout(){
    this.issignedin=false;
  }
}
