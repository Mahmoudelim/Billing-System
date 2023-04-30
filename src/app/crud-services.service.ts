import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class CrudServicesService {

 private usersRef = this.db.list('users');


  constructor(private db: AngularFireDatabase) { }

  getUsersRef() {
    return this.usersRef;
  }
}
