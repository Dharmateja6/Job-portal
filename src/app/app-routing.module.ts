import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { JobListComponent } from './home/job-list/job-list.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent,},
  {path:'login', component:LoginComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'form' ,component:FormComponent},
  {path:'sign' ,component:SignUpComponent},
  {path:'joblist',component:JobListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent =[
  HomeComponent,LoginComponent,AboutusComponent,
  ContactusComponent,FormComponent,SignUpComponent,
  JobListComponent
]

