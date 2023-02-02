import {Component} from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {
  showList: boolean = true;
  // showList: boolean = false; // to hide this component
  people = [
    {
      name: 'Jimmy',
      age: '22',
      hairColour: 'red'
    },
    {
      name: 'Joan',
      age: '32',
      hairColour: 'blonde'
    },
    {
      name: 'Billy',
      age: '67',
      hairColour: 'white'
    }
  ]
}
