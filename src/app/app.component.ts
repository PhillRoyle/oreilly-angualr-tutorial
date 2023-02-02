import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_tutorial_app';
  // moved to `stateful-button-page` component to do routing
  // buttonCount: number = 0;
  // showCounterButton: boolean = true;

  // moved to `multiple-choice-page` component for routing
  // doSomething(): void{
  //   alert("do something");
  // }
  //
  // doSomethingElse(): void{
  //   alert("do something else");
  // }
  //
  // doAnotherThing(): void{
  //   alert("do another thing");
  // }

  // moved to `stateful-button-page` component to do routing
  // incrementCount(): void{
  //   this.buttonCount += 1;
  // }
  //
  // toggleCounterButton(): void {
  //   this.showCounterButton =! this.showCounterButton;
  // }
}
