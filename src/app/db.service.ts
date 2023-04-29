import { Injectable } from '@angular/core';
import { User } from './user';
import { collection, collectionData, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { addDoc, deleteDoc, doc } from '@firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private firestore:Firestore) { 

  }
  adduser(user:User)
  {
    let $usersRef=collection(this.firestore,"user");
    return addDoc($usersRef,user);
  }

}
