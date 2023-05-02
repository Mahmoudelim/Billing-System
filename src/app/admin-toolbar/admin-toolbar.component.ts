import { Component } from '@angular/core';
import {  EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-admin-toolbar',
  templateUrl: './admin-toolbar.component.html',
  styleUrls: ['./admin-toolbar.component.css']
})
export class AdminToolbarComponent {
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
