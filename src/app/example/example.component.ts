import { Component, Input } from '@angular/core';

// component tag contains metadata
@Component({
  selector: 'app-example', // tag to insert component into html of another, i.e. `app.component.html` <-- the main starter
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {

  @Input() name: string = "";
  @Input() age: string = "";
  @Input() hairColour: string = "";

  constructor(){}

  ngOnInit(): void {}

}
