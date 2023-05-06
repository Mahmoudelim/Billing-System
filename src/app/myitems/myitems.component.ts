import { Component } from '@angular/core';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import { AuthenticationService } from '../authentication.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-myitems',
  templateUrl: './myitems.component.html',
  styleUrls: ['./myitems.component.css']
})
export class MyitemsComponent {
  
  userData: Observable<firebase.User | null> | undefined;
  items$: Observable<SnapshotAction<any>[]> | undefined;

  constructor(private db: AngularFireDatabase, public auth: AuthenticationService, public afAuth: AngularFireAuth) {
    this.userData = this.auth.userData;

    this.userData?.subscribe(user => {
      if (user) {
        const userEmail = user.email;
        if(userEmail){
        this.items$ = db.list('invoices', ref => ref.orderByChild('email')).snapshotChanges();
        }
      }
    });






  }

}
