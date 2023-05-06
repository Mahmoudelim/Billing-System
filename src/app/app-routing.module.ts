import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ElectristyDataComponent } from './electristy-data/electristy-data.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { WaterDataComponent } from './water-data/water-data.component';
import { TelephoneDataComponent } from './telephone-data/telephone-data.component';
import { ElectInvoiceComponent } from './elect-invoice/elect-invoice.component';
import { WaterInvoiceComponent } from './water-invoice/water-invoice.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { PhoneInvoiceComponent } from './phone-invoice/phone-invoice.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VarifyEmailComponent } from './varify-email/varify-email.component';
import { SignupComponent } from './signup/signup.component';
import { AdminsignupComponent } from './Admin/adminsignup/adminsignup.component';
import { AdminloginComponent } from './Admin/adminlogin/adminlogin.component';
import { AddOfferComponent } from './SP/add-offer/add-offer.component';
import { item } from './Model/item';
import { WaterPaymentComponent } from './water-payment/water-payment.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { PhonePostComponent } from './phone-post/phone-post.component';
import { MyitemsComponent } from './myitems/myitems.component';
const routes: Routes = [
{ path:'home', component: HomeComponent },
 { path: 'login', component: LoginComponent },
 { path: 'register', component: SignupComponent },
 { path: 'elect', component: ElectInvoiceComponent },
 { path: 'water', component: WaterInvoiceComponent },
 { path: 'slide', component: SlideshowComponent },
 {path:'userhome',component:UserDashboardComponent},
 {path:'history',component:PaymentHistoryComponent},
 {path:'phonepost',component:PhonePostComponent},
 {path:'toAdminElectericity',component:ElectristyDataComponent},
 {path:'toAdminDashboard',component:AdminDashboardComponent},
 {path:'toAdminWater',component:WaterDataComponent},
 {path:'toAdminTelephone',component:TelephoneDataComponent},
 {path:'pay',component:PaymentComponent},
 {path:'WaterPay',component:WaterPaymentComponent},
 {path:'phone',component:PhoneInvoiceComponent},
 {path: 'forgot-password', component : ForgotPasswordComponent},
 {path:'varify-email',component:VarifyEmailComponent},
 {path:'myitems',component:MyitemsComponent},
{path:'adminsignup',component:AdminsignupComponent},
{path:'adminlogin',component:AdminloginComponent},
{path:'addsp',component:AddOfferComponent},
{path:'payment',component:PaymentComponent,// define queryParams
data: {
  queryParams: [item, 'email']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
