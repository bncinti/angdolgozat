/*
* File: app-routing.module.ts
* Author: Bán Cintia
* Copyright: 2022, Bán Cintia
* Group: Szoft II/N
* Date: 2022-02-24
* Github: https://github.com/bncinti/
* Licenc: GNU GPL
*/


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
