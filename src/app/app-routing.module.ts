import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './components/customers/customers.component';
import { OrderComponent } from './components/order/order.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {path: 'Customers', component: CustomersComponent},
  {path: 'Orders', component: OrderComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Login', component: LoginComponent},
  {path: '', pathMatch:'full', redirectTo: '/Customers'},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
