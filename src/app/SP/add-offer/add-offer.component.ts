import { Component ,OnInit ,NgModule } from '@angular/core';
import { SpserviceService } from '../spservice.service';
import { item } from 'src/app/Model/item';
import { Observable, map } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication.service';
import firebase from 'firebase/compat/app';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent {

  items:item[]=[] ;
  newItem = {
    id:'',
    title: '',
    description: '',
    ownername:'',
    status:''
  }; 
  
  userData: Observable<firebase.User | null> | undefined;
  items$: Observable<SnapshotAction<any>[]>;
  filtered$: Observable<any[]> | undefined;

   constructor(private itemService: SpserviceService,public auth:AuthenticationService,public db :AngularFireDatabase,public useraus:AngularFireAuth) {
    this.userData=this.auth.userData
    this.items$ = db.list('items').snapshotChanges();

    }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
  }
  filterItems() {
    // Get the currently logged in user
    
    
  }
  

  addItem(items: item, email: string ): void {

    const i=new item(items.id,items.title,items.description,email,items.status);
    if(items.title==''||items.description=='')
    {
      console.error("please fill All inputs");
      
    }else{
    this.itemService.addItem(i);
    items.title='';
    items.description='';
    items.status='';

    
  }
  }
  
  updateItem(id: string|null, newItemData: any):void {
    this.db.object(`items/${id}`).set(newItemData);
  }


  deleteItem(itemId: string | null): void {
    this.db.object(`items/${itemId}`).remove();
    alert("deleted succesfully")

  }
  deleteAll(): void {

    this.itemService.deleteAll();
  }
  
  
  
 

 

}

  

  


  

  

