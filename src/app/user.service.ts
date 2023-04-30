import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private firebaseService: CrudServicesService) { }

  private usersRef = this.firebaseService.getUsersRef();

  addUser(user: User) {
    return this.usersRef.push(user);
  }
  private users: User[] = [
    new User('John', 'Doe', 'john@example.com', 'passw0rd1', '1111-1111-1111-1111', '12/23', '123', 50, 70, 90, new Date('2023-05-01'), new Date('2023-05-01'), new Date('2023-05-01')),
    new User('Jane', 'Smith', 'jane@example.com', 'password2', '2222-2222-2222-2222', '01/24', '456', 75, 80, 100, new Date('2023-05-01'), new Date('2023-05-01'), new Date('2023-05-01')),
    // add more users as needed
  ];




  getUsers(): Observable<User[]> {
    return of(this.users);
  }

}import { CrudServicesService } from './crud-services.service';

