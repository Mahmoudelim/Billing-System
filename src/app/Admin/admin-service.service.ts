import { Injectable } from '@angular/core';
import { Admin } from '../Model/admin';
import { Observable, of } from 'rxjs';
import { CrudServicesService } from '../crud-services.service';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private firebaseService: CrudServicesService) { }

  private usersRef = this.firebaseService.getadminsRef();

  addadmin(admin: Admin) {
    return this.usersRef.push(admin);
  }
  private admin: Admin[] = [
    
  ];




  getUsers(): Observable<Admin[]> {
    return of(this.admin);
  }  
}
