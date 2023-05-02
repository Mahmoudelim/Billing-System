import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { item } from '../Model/item';
@Injectable({
  providedIn: 'root'
})
export class SpserviceService {
  public itemsRef: AngularFireList<item>;
submitted=false;
  constructor(private db: AngularFireDatabase) {
    this.itemsRef = this.db.list<item>('items');
    
  }

  deleteItem(id: string): Promise<void> {
    return this.itemsRef.remove(id);
  }
  
  
   getItems(): Observable<item[]> {
    return this.itemsRef.valueChanges();
  }
  

 
  
  addItem(item: item): void {
    item.id = this.db.createPushId(); // generate a unique ID
     
    this.itemsRef.push(item);
    this.submitted = true;

  }
  update(key: string, value: any): Promise<void> {
    return this.itemsRef.update(key, value);
  }
  
  
  getAll(): AngularFireList<item> {
    return this.itemsRef;
  }
  deleteAll(): Promise<void> {
    return this.itemsRef.remove();
  }

  
 
}




