import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { UserDetail } from '../../core/models/UserDetails';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  @Input('userDetails') userDetails: UserDetail;

  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();
  @Output() confirm: EventEmitter<UserDetail> = new EventEmitter<UserDetail>();

  constructor() { }

  onConfirm(){
    this.confirm.emit(this.userDetails);
  }

  onCancel(){
    this.cancel.emit();
  }

}
