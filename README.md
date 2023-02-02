# AngularTutorialApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Angular

Open source frond end js lib, created by Google. USes modular components to promote re-use. Written in typescript.

Don't set up from scratch - use Angular CLI - does all the boilerplate... `npm install -g @angular/cli` Test
installation with `ng version` - prints:

```agsl
Angular CLI: 15.1.3
Node: 18.12.1
Package Manager: npm 8.19.2
OS: darwin arm64

Angular: undefined
```

Create a new angular project with `ng new <name>`. It installs a _ton_ of stuff!

Run it with `ng serve` Compiles & builds, and serves on [localhost:4200](http://localhost:4200) - shows an angular homepage, built from the bootstrapped stuff.
In tute, we created a new component (see below) removed all from bootstrap `app.component.html` except `<router-outlet></router-outlet>`, and added our
new component with `<app-example></app-example>`. Run `ng serve -o` (to open tab automatically) and see the new component.

Has hot re-loading, so edit the component and the browser is updated.

Components from `app` dir are pulled into `index.html` using `<app-root></app-root>`. `main.ts` is the _code_ entry point.

Components defined across 3 files - ~.ts, ~.html, and ~.css. Also auto-generates `app.component.spec.ts` - can run with `ng test` and a browser window is opened with karma results.
`app.module.ts` is the global place to add dependencies & libs.

### Creating components
Generally, create new components using the angular cli, rather than creating files (because so much bootstrap & diff files?!??) To do so, use
`ng generate component <name>` Creates a new dir with the component name, as well as a .ts, .html, .css, and .spec.ts file. (Or `ng g c example` as shortcut)

### Inputs

To inout into a component:
* open the component's ts file (`example.component.ts`) and add `input` from angular core - `import { Component, Input } from '@angular/core';`
* add a field in the component: `@Input() name: string = "";`
* in component's html file, utilise the inout with `{{name}}`
* add the input into the file holding the component, ie. `<app-example name="phillipo"></app-example>` in app.component.html
* can add the above multiple times, re-using the component, and it appears lots, with different names.

### Display conditionally

USe *structural directives*. Change the structure of the DOM depending on logical conditions. To do that, use `ngIf` in the html component:
`<p *ngIf="age">Age is {{age}}</p>` - if 'age' exists, this line will show, otherwise not.

We can conditionally add alternative blocks:
```agsl
*ngIf="name; else noNameBlock"
```
so if 'name' is not provided, we load the component called 'noNameBlock':
```agsl
<ng-template #noNameBlock>
  <h1>Yo dude</h1>
</ng-template>
```

### more components
Previously, built a 'person' representative in `example`, and then listed 3 of them by adding them in `app.component.html`. Bit clunky.

Now created a `people-list` component to take a list of people (see the `.ts` file). In the `html` file, we write out how they're displayed, and use `*ngFor="let person of people` to loop over the list.

**NB** can only use **one** `*ng~` thing in a block. To use others, need to nest in other blocks, i.e.:
```agsl
<div *ngIf="showList">
  <div *ngFor="let person of people">
```

## Styling
In `~.ts` has a line in `components` like `styleUrls: ['./multiple-choice.component.css']`. Go there to modify. These styles are **component
specific**. Move the css to a different component and the buttons won't have the styling!

If want the style to apply to *all* buttons in the app, put them in `stlyes.css`. If there's a component-specific style, obvs that will over-ride the global one.

### Alternative (bad one)
Define styles as a string inside the component's `component` block, i.e. `styles: ['button {background-color: blue']` <-- don't do this

## State
Really easy to add state to a component, i.e. `single-component-stateful-button.component` can have a field called `count` that it increments & displays.

**BUT** if we want to share state across components, trickier So if `app-congrats-message-component` should only appear once count hits 5, it needs access to the internal state or another component BAD.

So, we *'hoist'* the state to a parent component! Move `count` to `app-component.ts`, with it's fn, add inout and output (event emitter), and now the parent component which owns the state, can access functionality (see `app-stateful-button`)

## Lifecycle management
all lifecycle methods are started with `ng` to stop them being overridden. The component must implement them, ie. `implements OnInit`

List of events [here](https://angular.io/guide/lifecycle-hooks).

* `ngOnInit` - runs before content rendered, for loading data
* `ngOnDestroy` - runs when component is destroyed, to clean up

## Routing
Look at `app.-routing.module.ts`. It has a line `const routes: Routes = [];` which contains our routes. In tute, we create a different route for each component.

Simple to add routes, just import & add to array. However, those components which had hoisted their state to the parent (`app-component`) no have no
parent. For those (`multiple-choice` and `stateful-button`), we need to create *new* parents to do that job - see the `~page~` components.

### URL & Query Params
#### Url params
extra bits at the end, ie. [phillip-royle... is the url param](https://www.linkedin.com/in/phillip-royle-a3a2b419/). 

So in the router, I added a route for [query-params-example](http://localhost:4200/params-example/121/ergwetrgh) (using 2 url params). In the html, simply
display it, and in the ts, use `this.route.snapshot.paramMap.get("aUrlParam")` to grab the param(s).

### Query Params
extra bits *after* the route, i.e. [?q=tallest building... is query param](https://www.google.com/search?q=tallest+building+ever&oq=tallest+building+ever&aqs=chrome..69i57j0i512l9.4080j0j7&sourceid=chrome&ie=UTF-8)
These are _not_ order dependent. Allows us to define state of app.

To add query params, can print -> `console.log(`query params = ${JSON.stringify(this.route.queryParams)}`);`. 
So for `http://localhost:4200/params-example/3453/2342?one=23235&two=sdgfjun` we get 
`query params = {"closed":false,"currentObservers":null,"observers":[],"isStopped":false,"hasError":false,"thrownError":null,"_value":{"one":"23235","two":"sdgfjun"}}`

Or, even better `this.route.queryParams.subscribe(params => console.log(`params: ${JSON.stringify(params)}`))` gives us only our passed in ones:
`params: {"one":"23235","two":"sdgfjun"}`. 

    Or `this.route.queryParams.subscribe(params => console.log(params))` ==> 
    ```agsl
      {one: '23235', two: 'sdgfjun'}
          one:"23235"
          two:"sdgfjun"
    ```

## Navigation
Two kinds:
1. With links - See `app-components` - added some links. `routerLink` allows navigation *without re-loading the page* instead of href Nice performance improvements.
2. Programmatically - See `app-navigate-county-button` - we use the router obj to navigate to a certain page based on state in the component.

## Angular Services
Like components, but don't have html rendering to page - like a DOM-less component.

Create with `ng g s user-info`. Creates exactly like a component, but only makes the `~.ts` and `~.spec.ts`, and adds them to the root, not into a folder.

Make an HTTP call using the `import {HttpClient} from "@angular/common/http";` like `this.http.get('https://randomuser.me/api')`.

**NOTE**, this is an async call, it returns an `Observable`, so we need to get angular to `subscribe` to it, and once it's finished, the listener will be updated!

## Composition & Inheritance
All of our components are defined as classes. In OO, we tend to pull out the common things as super-classes. In angular - don't do that! Use composition instead.

**Inheritance** uses `extends`. In constructor call `super()`. May want to set `template` in `~.ts` to the html path to the super class too...

ie. make a `Button` component that takes inputs of bgColor and text. Can add 1 to html with colour green and text 'danger' and one with colour red and text 'big danger'.
*Then*, create a `DangerButton` component, that hard codes those values, extends `Button`, and then you just need to add that to the html anywhere you need it, without input params.
Nice. Whenever you need to change colour, just change in 1 place. All good.

**Composition** is the opposite. Directly uses the Button component. In the `DangerButton` component's html, simply use 
`<app-button-component text="Danger" bgColor="red"></app-button-component>`. Still have a single place to change colours, but no need to inherit etc...

git init -b main  
git remote add origin git@github.com:PhillRoyle/oreilly-angualr-tutorial.git
git branch -M main
git add . && git commit -m "initial commit"
git push -u origin main
