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
  targetComponentRoute = '/home';

 issignedin=false;
  constructor(public router: Router,public Auth:AuthenticationService) {
      this.router.navigate([this.targetComponentRoute]);
    
  }
  
  ngOnInit(){
    
  }
 
  
}
