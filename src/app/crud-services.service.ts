import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, map, of } from 'rxjs';
import { User } from './user';
import { ElectricitPayment } from './Model/ElectricitPayment';
import { WaterPayment } from './Model/WaterPayment';
import { PaymentHistory } from './Model/paymentHistory';
import { phonePayment } from './Model/phonePayment';

@Injectable({
  providedIn: 'root'
})
export class CrudServicesService {

 private usersRef = this.db.list('users');
 private adminsRef = this.db.list('admins');
 private  electricityPymentRef7=this.db.list('Electricity Payment')
 private  waterPaymentRef=this.db.list('Water Payment')
 private  phonePaymentref=this.db.list('phone payment')
private PaymentHistoryRef=this.db.list('Payment History')
 constructor(private db: AngularFireDatabase) { }
  getUsers(): Observable<User[]> {
    return this.db.list<User>('users').valueChanges();
  }
getphonePaymentRef(){
  return this.phonePaymentref;
}
getElectricityPaymentByEmail(email: string): Observable<ElectricitPayment[]> {
  return this.db.list<ElectricitPayment>('Electricity Payment', ref => ref.orderByChild('UserEmail').equalTo(email)).valueChanges();
}
getPhoenbyEmail(email: string): Observable<phonePayment[]> {
  return this.db.list<phonePayment>('phone payment', ref => ref.orderByChild('UserEmail').equalTo(email)).valueChanges();
}
getWaterPaymentByEmail(email: string): Observable<WaterPayment[]> {
  return this.db.list<WaterPayment>('Water Payment', ref => ref.orderByChild('UserEmail').equalTo(email)).valueChanges();
}
getWaterRef(){
  return this.waterPaymentRef;
}
getPaymentRef(){
  return this.PaymentHistoryRef;
}
updateWaterPaymentByEmail(email: string, waterPayment: WaterPayment) {
  const waterPaymentRef = this.db.list('Water Payment', ref => ref.orderByChild('UserEmail').equalTo(email)).snapshotChanges();
  waterPaymentRef.subscribe(actions => {
    actions.forEach(action => {
      const key = action.key!;
      const data = action.payload.val() as WaterPayment;
      if (data.UserEmail === email) {
        this.db.list('Water Payment').update(key, waterPayment);
      }
    });
  });
}
updatePhonePayment(email: string, phone: phonePayment) {
  const phonePaymentref = this.db.list('phone payment', ref => ref.orderByChild('UserEmail').equalTo(email)).snapshotChanges();
  phonePaymentref.subscribe(actions => {
    actions.forEach(action => {
      const key = action.key!;
      const data = action.payload.val() as phonePayment;
      if (data.UserEmail === email) {
        this.db.list('phone payment').update(key, phone);
      }
    });
  });
}
updateElectricityPaymentByEmail(email: string, electrricity: ElectricitPayment) {
  const waterPaymentRef = this.db.list('Electricity Payment', ref => ref.orderByChild('UserEmail').equalTo(email)).snapshotChanges();
  waterPaymentRef.subscribe(actions => {
    actions.forEach(action => {
      const key = action.key!;
      const data = action.payload.val() as ElectricitPayment;
      if (data.UserEmail === email) {
        this.db.list('Electricity Payment').update(key, electrricity);
      }
    });
  });
}
updateUserPreOrPost(email: string, isPostpaid: boolean): void {
  this.db.list<User>('users', ref => ref.orderByChild('email').equalTo(email))
    .snapshotChanges()
    .subscribe(actions => {
      actions.forEach(action => {
        const key = action.key!;
        const user = action.payload.val() as User;
        if (user.email === email) {
          user.PreOrpost = isPostpaid;
          this.db.list('users').update(key, user);
        }
      });
    });
}


getUserByEmail(email: string): Observable<User> {
  return this.db.list<User>('users', ref => ref.orderByChild('email').equalTo(email)).valueChanges().pipe(
    map(users => users[0])
  );
}

deleteWaterPaymentByEmail(userEmail: string) {
  const waterPaymentRef = this.db.list('Water Payment', ref => ref.orderByChild('UserEmail').equalTo(userEmail)).snapshotChanges();
  waterPaymentRef.subscribe(actions => {
    actions.forEach(action => {
      const key = action.key!;
      const data = action.payload.val() as WaterPayment;
      if (data.UserEmail === userEmail) {
        this.db.list('Water Payment').remove(key);
      }
    });
  });
}



getElectristyRef(){
  return this.electricityPymentRef7;
}
  getUsersRef() {
    return this.usersRef;
  }
  getadminsRef() {
    return this.adminsRef;
  }
  getAllPaymentsByEmail(email: string): Observable<PaymentHistory[]> {
    if (!email) {
      return of([]);
    }

    return this.db.list<PaymentHistory>('Payment History', ref => ref.orderByChild('UserEmail').equalTo(email)).valueChanges();
  }


}
