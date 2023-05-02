import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, map, of } from 'rxjs';
import { CrudServicesService } from './crud-services.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private firebaseService: CrudServicesService) { }

  private usersRef = this.firebaseService.getUsersRef();

  addUser(user: User) {
    return this.usersRef.push(user);
  }







}

