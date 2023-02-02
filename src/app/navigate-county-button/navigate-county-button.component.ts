import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigate-county-button',
  templateUrl: './navigate-county-button.component.html',
  styleUrls: ['./navigate-county-button.component.css']
})
export class NavigateCountyButtonComponent implements OnInit {

  count: number = 0;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  incrementCount(): void {
    this.count += 1;
    if(this.count >= 5){
      this.router.navigateByUrl('/event-handling');
    }
  }
}
