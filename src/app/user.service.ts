import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, map, of } from 'rxjs';
import { CrudServicesService } from './crud-services.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private firebaseService: CrudServicesService,private db: AngularFireDatabase) { }

  private usersRef = this.firebaseService.getUsersRef();

  addUser(user: User) {
    return this.usersRef.push(user);
  }

  getUserByEmail(email: string): Observable<User> {
    return this.db.list<User>('/users', ref => ref.orderByChild('email').equalTo(email))
      .valueChanges()
      .pipe(map(users => users[0]));
  }





}

