import {Component} from '@angular/core';

@Component({
  selector: 'app-single-component-stateful-button',
  templateUrl: './single-component-stateful-button.component.html',
  styleUrls: ['./single-component-stateful-button.component.css']
})
export class SingleComponentStatefulButtonComponent {

  count: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  incrementCount(): void {
    this.count += 1;
  }
}
