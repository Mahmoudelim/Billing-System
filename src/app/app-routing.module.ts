import { NgModule } from '@angular/core';
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
const routes: Routes = [
{ path:'', component: HomeComponent },
 { path: 'login', component: LoginComponent },
 { path: 'register', component: RegisterComponent },
 { path: 'elect', component: ElectInvoiceComponent },
 { path: 'water', component: WaterInvoiceComponent },
 { path: 'slide', component: SlideshowComponent },
 {path:'userhome',component:UserDashboardComponent},
 {path:'toAdminElectericity',component:ElectristyDataComponent},
 {path:'toAdminDashboard',component:AdminDashboardComponent},
 {path:'toAdminWater',component:WaterDataComponent},
 {path:'toAdminTelephone',component:TelephoneDataComponent},
 {path:'pay',component:PaymentComponent},
 {path:'phone',component:PhoneInvoiceComponent},
 {path: 'forgot-password', component : ForgotPasswordComponent},
 {path:'varify-email',component:VarifyEmailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
