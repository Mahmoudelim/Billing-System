import { Component ,OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { SpserviceService } from '../spservice.service';
import { item } from 'src/app/Model/item';
import { Observable, map } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication.service';
import { user } from '@angular/fire/auth';
import firebase from 'firebase/compat/app';


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
    ownername:''
  }; 
  
  userData: Observable<firebase.User | null> | undefined;

   constructor(private itemService: SpserviceService,public auth:AuthenticationService) {
    this.userData=this.auth.userData
    }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
  }
  

  addItem(items: item, email: string ): void {

    const i=new item(items.id,items.title,items.description,email);
    if(items.title==''||items.description=='')
    {
      console.error("please fill All inputs");
      
    }else{
    this.itemService.addItem(i);
    items.title='';
    items.description='';
    
  }
  }
  
  

  deleteItem(items: item): void {
    this.itemService.deleteItem(items.id);
  }
  deleteAll(): void {

    this.itemService.deleteAll();
  }
  
  
  
 

 

}

  

  


  

  

