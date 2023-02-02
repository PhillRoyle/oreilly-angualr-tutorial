import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import {HttpClientModule} from "@angular/common/http";
import { PeopleListComponent } from './people-list/people-list.component';
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';
import { EventHandlingComponent } from './event-handling/event-handling.component';
import { StatefulButtonComponent } from './stateful-button/stateful-button.component';
import { CongratsMessageComponentComponent } from './congrats-message-component/congrats-message-component.component';
import { SingleComponentStatefulButtonComponent } from './single-component-stateful-button/single-component-stateful-button.component';
import { StatefulButtonPageComponent } from './stateful-button-page/stateful-button-page.component';
import { MultipleChoicePageComponent } from './multiple-choice-page/multiple-choice-page.component';
import { QueryParamsExampleComponent } from './query-params-example/query-params-example.component';
import { NavigateCountyButtonComponent } from './navigate-county-button/navigate-county-button.component';
import { UserInfoDisplayComponent } from './user-info-display/user-info-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    PeopleListComponent,
    MultipleChoiceComponent,
    EventHandlingComponent,
    StatefulButtonComponent,
    CongratsMessageComponentComponent,
    SingleComponentStatefulButtonComponent,
    StatefulButtonPageComponent,
    MultipleChoicePageComponent,
    QueryParamsExampleComponent,
    NavigateCountyButtonComponent,
    UserInfoDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
