import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css'],// note this is an array, can pass multiple paths in...
  // styles: ['button {background-color: blue}'] // nah brah
})
export class MultipleChoiceComponent implements OnInit {

  @Output() a = new EventEmitter<void>();
  @Output() b = new EventEmitter<void>();
  @Output() c = new EventEmitter<void>();
  @Output() d = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  // button click for this calls this fn.. `a.emit()` triggers the @Output above, and if something is listening to
  // that, it'll be called In this example, we defined the listeners in `app.component.html`, with functions called in
  // `app.component.ts`
  aClicked(): void {
    console.log("Clicked Button A");
    this.a.emit();
  }
  bClicked(): void {
    console.log("Clicked Button B")
    this.b.emit();
  }
  cClicked(): void {
    this.c.emit();
  }
  dClicked(): void {
    this.d.emit();
  }
}
