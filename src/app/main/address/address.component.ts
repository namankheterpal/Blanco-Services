import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { UserDetail } from '../../core/models/UserDetails';
import { Constants } from '../../core/Constants';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Output() status: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onSubmit: EventEmitter<UserDetail> = new EventEmitter<UserDetail>();
  addressForm: FormGroup;

  genders: string[];
  countires: string[];
  cities: string[];

  constructor(private _formBuilder: FormBuilder) {
    this.genders = Constants.genders;
    this.countires = Constants.countires.sort();
    this.cities = Constants.cities.sort();
   }
  ngOnInit() {
    this.addressForm = this._formBuilder.group({
      line1: ['', Validators.required],
      line2: [''],
      postalCode: ['', [Validators.required, Validators.pattern('\\d*')]],
      city: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('\\d*')]],
      email: ['', [Validators.required,Validators.email]]
    });

    this.addressForm.statusChanges.subscribe((status) => { this.status.emit(status === 'VALID'); })
  }

  onSubmittion() {
    this.onSubmit.emit(this.addressForm.value);
  }

}
