import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { PaymentService } from './payment.service';
import { BillingService } from './billing.service';
import { UserService } from './user.service';
import { AuthenticationService } from './authentication.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ElectInvoiceComponent } from './elect-invoice/elect-invoice.component'; // Import the FormsModule
import { ElectristyDataComponent } from './electristy-data/electristy-data.component';
import { AdminToolbarComponent } from './admin-toolbar/admin-toolbar.component';
import { WaterDataComponent } from './water-data/water-data.component';
import { TelephoneDataComponent } from './telephone-data/telephone-data.component';
import { WaterInvoiceComponent } from './water-invoice/water-invoice.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PaymentComponent } from './payment/payment.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PhoneInvoiceComponent } from './phone-invoice/phone-invoice.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VarifyEmailComponent } from './varify-email/varify-email.component'; // Import the FormsModule
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';

import { environment } from 'src/environments/environment.development';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { LoadingDialogComponent } from './loading-dialog/loading-dialog.component';
import { SignupComponent } from './signup/signup.component';
import { AdminsignupComponent } from './Admin/adminsignup/adminsignup.component';
import { AdminloginComponent } from './Admin/adminlogin/adminlogin.component';
import { AddOfferComponent } from './SP/add-offer/add-offer.component';
import { Database, ref, remove } from 'firebase/database';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    RegisterComponent,
    HomeComponent,
    ElectInvoiceComponent,
    ElectristyDataComponent,
    AdminToolbarComponent,
    WaterDataComponent,
    TelephoneDataComponent,
    WaterInvoiceComponent,
    SlideshowComponent,
    PaymentComponent,
    NavbarComponent,
    PhoneInvoiceComponent,
    ForgotPasswordComponent,
    VarifyEmailComponent,
    LoadingDialogComponent,
    SignupComponent,
    AdminsignupComponent,
    AdminloginComponent,
    AddOfferComponent    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp({apiKey: "AIzaSyBoAwMaQlIt0NNvbnORvPRkUzeSsQb6fkQ",
    authDomain: "billing-system-58bed.firebaseapp.com",
    projectId: "billing-system-58bed",
    storageBucket: "billing-system-58bed.appspot.com",
    messagingSenderId: "94761470348",
    appId: "1:94761470348:web:fa04475b723003e3f86ea9",
    measurementId: "G-MM7G0TFPRC"}),AngularFireDatabaseModule,
    AngularFirestoreModule //firestore
    
    

    
  ],
  providers: [PaymentService,BillingService,UserService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
