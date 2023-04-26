import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ElectInvoiceComponent } from './elect-invoice/elect-invoice.component';
import { WaterInvoiceComponent } from './water-invoice/water-invoice.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
const routes: Routes = [
{ path:'', component: HomeComponent },
 { path: 'login', component: LoginComponent },
 { path: 'register', component: RegisterComponent },
 { path: 'elect', component: ElectInvoiceComponent },
 { path: 'water', component: WaterInvoiceComponent },
 { path: 'slide', component: SlideshowComponent },
 {path:'userhome',component:UserDashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
