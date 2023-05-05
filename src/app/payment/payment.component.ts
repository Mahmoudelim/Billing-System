import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, filter, map } from 'rxjs';
import firebase from 'firebase/compat/app';
import { AuthenticationService } from '../authentication.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { invoice } from '../Model/invoice';
import { InvoiceService } from '../invoice.service';
import { item } from '../Model/item';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  user:any=null;
  userData: Observable<firebase.User | null> | undefined;
  selectedItem: any;
  itemfromcart: item[]=[];
  email: string='';
  newinvoice = {
    id:'',
    title: '',
    email: '',
    cost:''
   
  }; 
  items: item[] = [];

  items$: Observable<item[]> | undefined;
  user$: Observable<firebase.User |null>;


  constructor(private db: AngularFireDatabase,public auth:AuthenticationService, private afAuth: AngularFireAuth,
    private userService: UserService,public route:ActivatedRoute,public invoiceService :InvoiceService
    ) {
   
    this.user$ = afAuth.authState.pipe(
      map(user => user ? firebase.auth().currentUser : null)
    );

  }
  ngOnInit() {
    // call the function to retrieve the user information
    
    this.afAuth.authState.subscribe(user => {
  if (user) {
    const userEmail = user.email;
    if (userEmail !== null) { // Check if userEmail is not null
      this.userService.getUserByEmail(userEmail).subscribe(user => {
        this.user = user;
      });
    }
  }
});
///fect item to invoice
this.route.queryParams.subscribe(params => {
  const itemString = params['item'];
  const email = params['email'];
  const item2 = JSON.parse(itemString);
  this.newinvoice.id=item2.id;
  this.newinvoice.title=item2.title;
  this.newinvoice.email=email;
  this.newinvoice.cost=item2.cost;
  this.email=email;
  
  
});
////search by title
this.items$ = this.db
      .list<item>('/items', ref => ref.orderByChild('title').equalTo(this.newinvoice.title))
      .valueChanges()
      .pipe(map(items => items));

    this.items$.subscribe(items => {
      this.items = items;
    });


    
}
addItem( ): void {

  const i=new invoice(this.newinvoice.id,this.newinvoice.title,this.newinvoice.cost,this.newinvoice.email);
  
  this.invoiceService.addItem(i);

  
}


  
}
