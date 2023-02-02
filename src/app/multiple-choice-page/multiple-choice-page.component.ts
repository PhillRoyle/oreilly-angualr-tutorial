import { Component } from '@angular/core';

@Component({
  selector: 'app-multiple-choice-page',
  templateUrl: './multiple-choice-page.component.html',
  styleUrls: ['./multiple-choice-page.component.css']
})
export class MultipleChoicePageComponent {
  doSomething(): void{
    alert("do something");
  }

  doSomethingElse(): void{
    alert("do something else");
  }

  doAnotherThing(): void{
    alert("do another thing");
  }
}
