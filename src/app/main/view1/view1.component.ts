import { Component, OnInit } from '@angular/core';
import { RestDataService } from '../../core/services/rest-data.service';
import { NgModel } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { UserDetail } from '../../core/models/UserDetails';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit, OnDestroy {
  list: UserDetail[];
  subscriptions: Subscription = new Subscription();

  constructor(private restDataService: RestDataService) { }

  ngOnInit() {
    const listSubscription = this.restDataService.getData()
      .subscribe((result => { this.list = result.reverse().slice(0, 5); }));

    this.subscriptions.add(listSubscription);

  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
