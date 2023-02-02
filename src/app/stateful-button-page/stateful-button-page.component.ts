import { Component } from '@angular/core';

@Component({
  selector: 'app-stateful-button-page',
  templateUrl: './stateful-button-page.component.html',
  styleUrls: ['./stateful-button-page.component.css']
})
export class StatefulButtonPageComponent {

  buttonCount: number = 0;
  showCounterButton: boolean = true;

  incrementCount(): void{
    this.buttonCount += 1;
  }

  toggleCounterButton(): void {
    this.showCounterButton =! this.showCounterButton;
  }
}
