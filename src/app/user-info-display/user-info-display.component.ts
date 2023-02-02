import {Component, OnInit} from '@angular/core';
import {UserInfoService} from "../user-info.service";

// Loads data from a server. Pass in the service we need (Dep Inj) to constructor, and (here) use `ngOnInit`
// to load the data before rendering

@Component({
  selector: 'app-user-info-display',
  templateUrl: './user-info-display.component.html',
  styleUrls: ['./user-info-display.component.css']
})
export class UserInfoDisplayComponent implements OnInit {

  isLoading:boolean = true;
  myUserInfo: any = {};

  constructor(private userInfo: UserInfoService) {
  }

  ngOnInit() {
    // just calls the fun to print it - first step
    this.userInfo.loadAndPrintData();

    // this used initially, but doing too much - Single Responsibility Principle - so moved it.
    // actually subscribe to the event
    // this.userInfo.loadData().subscribe(data => {
    //   this.myUserInfo = data.results[0];
    //   this.isLoading = false;
    // });

    // Instead, get the service to give us what we need exactly!
    this.userInfo.loadData().subscribe( (someInfo: any) => {
      this.myUserInfo = someInfo;
      this.isLoading = false;
    });
  }
}
