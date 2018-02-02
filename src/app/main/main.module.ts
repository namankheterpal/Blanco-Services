import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { View1Component } from './view1/view1.component';
import { MaterialModule } from '../core/material.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { ReviewComponent } from './review/review.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddressComponent } from './address/address.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [View1Component, DetailsComponent, ReviewComponent, RegistrationComponent, AddressComponent]
})
export class MainModule { }
