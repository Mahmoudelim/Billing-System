import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ElectristyDataComponent } from './electristy-data/electristy-data.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { WaterDataComponent } from './water-data/water-data.component';
import { TelephoneDataComponent } from './telephone-data/telephone-data.component';

const routes: Routes = [
{ path:'', component: HomeComponent },
 { path: 'login', component: LoginComponent },
 { path: 'register', component: RegisterComponent },
 {path:'toAdminElectericity',component:ElectristyDataComponent},
 {path:'toAdminDashboard',component:AdminDashboardComponent},
 {path:'toAdminWater',component:WaterDataComponent},
 {path:'toAdminTelephone',component:TelephoneDataComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
