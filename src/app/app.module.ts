import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { SlideshowComponent } from './slideshow/slideshow.component'; // Import the FormsModule


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
    SlideshowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PaymentService,BillingService,UserService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
