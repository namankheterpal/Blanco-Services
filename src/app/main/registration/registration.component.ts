import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDetail } from '../../core/models/UserDetails';
import { UserAddress } from '../../core/models/UserAddress';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { RestDataService } from '../../core/services/rest-data.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  isLinear = true;
  detailsCompleted: boolean;
  addressCompleted: boolean;
  userDetails: UserDetail;

  constructor(private _formBuilder: FormBuilder,
    public snackBar: MatSnackBar, private router: Router, private restDataService: RestDataService) { }

  ngOnInit() {
    this.userDetails = new UserDetail();
    this.restDataService.verifyCache();
  }

  onDetailsStatus(completed: boolean): void {
    this.detailsCompleted = completed;
  }
  onDetailsSubmit(userDetails: UserDetail): void {
    this.userDetails = userDetails;
  }

  onAddressStatus(completed: boolean): void {
    this.addressCompleted = completed;
  }
  onAddressSubmit(userAddress: UserAddress): void {
    this.userDetails.address = userAddress;
  }

  onConfirm(userDetail: UserDetail) {
    this.restDataService.put(userDetail).subscribe(() => {
      this.snackBar.open('Record Created', null, {
        duration: 3000
      });
      this.router.navigate(['/home']);
    });
  }
  onCancel() {
    this.router.navigate(['/home']);
  }
}
