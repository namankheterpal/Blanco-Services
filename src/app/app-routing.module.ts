import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { View1Component } from './main/view1/view1.component';
import { RegistrationComponent } from './main/registration/registration.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: View1Component, pathMatch: 'prefix'},
  {path: 'register', component: RegistrationComponent, pathMatch: 'prefix'},
  {path: '**', redirectTo: 'home', pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
