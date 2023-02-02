import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-handling',
  templateUrl: './event-handling.component.html',
  styleUrls: ['./event-handling.component.css']
})
export class EventHandlingComponent implements OnInit {

  message1 = "A hard-coded message";

  constructor() {
  }

  ngOnInit() {
  }

  doSomething(message: string = ""): void {
    let additionalMessage = '';
    if (message) {
      additionalMessage += `==> ${message}`
    }
    alert(`woo, button click ${additionalMessage}`);
  }

  doAnotherThing(message: string): void {
    alert(`woo, did another thing:\n${message}`);
  }
}
