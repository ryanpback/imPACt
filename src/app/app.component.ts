import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: Observable<any[]>;
  state: string = "OR";
  url: string = "http://api.followthemoney.org/?s=" + this.state + "&y=2016&c-exi=1&gro=c-t-id&APIKey=" + this.apiKey + "&mode=json";

   constructor (private http: Http) {}

  ngOnInit() {
    this.http.get(this.url).map(this.extractData).subscribe(i => this.data = i);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body)
    return body.records || { };
  }
  title = 'imPACt';
  displayedComponent = 'home'
  getComponent(component) {
    this.displayedComponent = component;
  }
}
