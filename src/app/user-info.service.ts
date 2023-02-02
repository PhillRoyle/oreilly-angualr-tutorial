import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, reduce} from "rxjs/operators";
import {Observable} from "rxjs";

// no `component` annotation... This can be injected into any component using their constructor (like `Router`)
@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private http: HttpClient) {
  }

  // this is a bit useless - first step, just prints...
  loadAndPrintData(): void {
    console.log(`***** it's working ***`);
    //  using `randomuser.me` API to get some data...
    // async call is subscribed to, and subscribe takes a function to listen to the output - initially, just print...
    this.http.get<any>('https://randomuser.me/api').subscribe(data => console.log(data.results[0]));
  }

  // this used initially, but display component doing too much - Single Responsibility Principle - so changed it.
  // loadData(): Observable<any>{
  //   return this.http.get<any>('https://randomuser.me/api');
  // }

  // now do the same as above, but also retireve only the data I want, and format the response!
  loadData(): Observable<any> {
    return this.http.get<any>('https://randomuser.me/api').pipe(
      map(data => {
        return data.results[0];
      }),
      map(userInfoRaw => {
        let nameArray: String[] = Object.values(userInfoRaw.name);
        return {
          name: nameArray.reduce((acc , namePart) => acc+= (namePart + " "), " "),
          email: userInfoRaw.email
        }
      })
    );
  }
}
