import {Component, OnInit} from '@angular/core';
// to get access to query + url params
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-query-params-example',
  templateUrl: './query-params-example.component.html',
  styleUrls: ['./query-params-example.component.css']
})
export class QueryParamsExampleComponent implements OnInit {

  urlParam: String = "";
  anotherUrlParam: String = "";
  // set type to `any` as `object` doesn't have `name` as a key, and we need to address that in html
  myQueryParams: any[] = [];

  // add `ActivatedRoute` to constructor - dependency injection
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    // get the url, find the url param named (like we named in router), and assign to `urlParam`.
    // Use a default in case the user doesn't provide a urlParam
    this.urlParam = this.route.snapshot.paramMap.get("aUrlParam") || "** no url param provided **"; //|| "";
    this.anotherUrlParam = this.route.snapshot.paramMap.get("anotherUrlParam") || "** no additional url param provided **"; //|| "";

    console.log(`url params = ${JSON.stringify(this.route.snapshot.params)}`);
    console.log(`query params = ${JSON.stringify(this.route.queryParams)}`);

    this.route.queryParams.subscribe(params => console.log(`params: ${JSON.stringify(params)}`))
    this.route.queryParams.subscribe(params => console.log(params))

    // nice little fn - get params, get the keys and map over each to get key-value, assigning to `myQueryParams`
    this.route.queryParams.subscribe(params => {
      this.myQueryParams = Object.keys(params)
        .map(key => ({name: key, value: params[key]}))
    });
  }

}
