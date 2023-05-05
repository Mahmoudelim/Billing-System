import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { User } from './user';
import { ElectricitPayment } from './Model/ElectricitPayment';
import { WaterPayment } from './Model/WaterPayment';

@Injectable({
  providedIn: 'root'
})
export class CrudServicesService {

 private usersRef = this.db.list('users');
 private adminsRef = this.db.list('admins');
 private  electricityPymentRef7=this.db.list('Electricity Payment')
 private  waterPaymentRef=this.db.list('Water Payment')
 private  phonePaymentref=this.db.list('phone payment')
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
getWaterPaymentByEmail(email: string): Observable<WaterPayment[]> {
  return this.db.list<WaterPayment>('Water Payment', ref => ref.orderByChild('UserEmail').equalTo(email)).valueChanges();
}
getWaterRef(){
  return this.waterPaymentRef;
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



getElectristyRef(){
  return this.electricityPymentRef7;
}
  getUsersRef() {
    return this.usersRef;
  }
  getadminsRef() {
    return this.adminsRef;
  }
}
