import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { VarifyEmailComponent } from './component/varify-email/varify-email.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
 {path: 'login', component : LoginComponent},
 {path: 'dashboard', component : DashboardComponent},
 {path: 'register', component : RegisterComponent},
 {path: 'varify-email', component : VarifyEmailComponent},
 {path: 'forgot-password', component : ForgotPasswordComponent},
//  {path : 'file-upload', component:FileuploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
