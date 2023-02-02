import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExampleComponent} from "./example/example.component";
import {
  SingleComponentStatefulButtonComponent
} from "./single-component-stateful-button/single-component-stateful-button.component";
import {MultipleChoicePageComponent} from "./multiple-choice-page/multiple-choice-page.component";
import {PeopleListComponent} from "./people-list/people-list.component";
import {EventHandlingComponent} from "./event-handling/event-handling.component";
import {StatefulButtonPageComponent} from "./stateful-button-page/stateful-button-page.component";
import {QueryParamsExampleComponent} from "./query-params-example/query-params-example.component";
import {NavigateCountyButtonComponent} from "./navigate-county-button/navigate-county-button.component";
import {UserInfoDisplayComponent} from "./user-info-display/user-info-display.component";

const routes: Routes = [
  {path: "example", component: ExampleComponent},
  {path: "single-comp-stateful-button", component: SingleComponentStatefulButtonComponent},
  {path: "people-list", component: PeopleListComponent},
  {path: "event-handling", component: EventHandlingComponent},


  // state is hoisetd to parent, so can't use this with routing, need to create a new parent page and route to that
  // import {StatefulButtonComponent} from "./stateful-button/stateful-button.component";
  // state is shared in main file, so need to do more - app component managed state. So instead, we'll create a new
  // `stateful-button-page` component to manage the state, and use that to route instead.
  // {path: "stateful-button", component: StatefulButtonComponent},
  {path: "stateful-button", component: StatefulButtonPageComponent},

  // state is hoisetd to parent, so can't use this with routing, need to create a new parent page and route to that
  // {path: "multiple-choice", component: MultipleChoiceComponent},
  {path: "multiple-choice", component: MultipleChoicePageComponent},

  // now we have routing, there's nothing on 'localhost:4200' (we haven't added a welcome page), so if user goes there,
  // we redirect. `pathMatch` indicates how strictly we validate that initial empty path.
  // {path:"", redirectTo: "/stateful-button", pathMatch: "full" },

  // add the expected url param to the route. For multiple allowed routes, add each of them.!!?
  {path: "params-example", component: QueryParamsExampleComponent},
  {path: "params-example/:aUrlParam", component: QueryParamsExampleComponent},
  {path: "params-example/:aUrlParam/:anotherUrlParam", component: QueryParamsExampleComponent},
  {path: "navigate-county-button", component: NavigateCountyButtonComponent},
  {path: "app-user-info-display", component: UserInfoDisplayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
