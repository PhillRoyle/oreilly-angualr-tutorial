import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stateful-button',
  templateUrl: './stateful-button.component.html',
  styleUrls: ['./stateful-button.component.css']
})
export class StatefulButtonComponent  implements OnInit, OnDestroy {
 // Even though state held in `app.component.ts`, we still initialise the value, but it'll only be the value if no
  // input is provided.
  @Input() buttonCount: number = 0;

  @Output() buttonClicked = new EventEmitter<void>();

  constructor() {
  }

  // called when app initialises... before app even renders on screen!!! see docs
  // the alert would appear when refresh or navigate to the page
  // Meant to be used to load data into components, i.e network calls.
  ngOnInit(): void{
    // NB - don't add alerts in here for reals.... just to show what happens..
    // alert("in ngOnInit of app-stateful-button");
  }

  // called when app is destroyed... see docs
  // will appear if navigate away from the page, _or_ if the component is removed from the DOM
  // we'll add a button to hide or show this component - see `button (click)="toggleCounterButton()`
  // Meant to be used to cancel intervals, timeouts, etc to prevent memory leaks
  ngOnDestroy() {
    // NB - don't add alerts in here for reals.... just to show what happens..
    // alert("in ngOnDestroy of app-stateful-button");
  }

  // when button is clicked, this will be called (see html) and triggers the event emitter
  onClick(): void {
    this.buttonClicked.emit();
  }
}
