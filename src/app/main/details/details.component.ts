import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { UserDetail } from '../../core/models/UserDetails';
import { Constants } from '../../core/Constants';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Output() status: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onSubmit: EventEmitter<UserDetail> = new EventEmitter<UserDetail>();
  detailForm: FormGroup;

  genders: string[];
  countires: string[];
  
  constructor(private _formBuilder: FormBuilder) {
    this.genders = Constants.genders;
    this.countires = Constants.countires.sort();
   }

  ngOnInit() {
    this.detailForm = this._formBuilder.group({
      sex: ['', Validators.required],
      initials: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      nationality: ['', Validators.required],
      socialSecurityNumber: ['', [Validators.required, Validators.pattern('\\d*')]]
    });

    this.detailForm.statusChanges.subscribe((status) => { this.status.emit(status === 'VALID'); })
  }

  onSubmittion() {
    this.onSubmit.emit(this.detailForm.value);
  }
}