import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

  apiKey = "ad4ec64891c87fb4e5410a42ef340816"

  constructor(private http: Http) { }

  private extractData(res: Response) {
    let body = res.json();
    // console.log(body.records);
    return body.records || { };
  }



  getResults(selection) {
    let searchParam: string = null;
    searchParam = selection;
    let url: string = "http://api.followthemoney.org/?s=" + searchParam + "&y=2016&c-exi=1&gro=c-t-id&APIKey=" + this.apiKey + "&mode=json";
    return this.http.get(url).map(this.extractData);
  }

  getCandidateDetails(id) {
    let url: string = "http://api.followthemoney.org/?c-t-id=" + id + "&y=2016&c-exi=1&gro=c-t-id&APIKey=" + this.apiKey + "&mode=json";
    return this.http.get(url).map(this.extractData);
  }

  getCandidateContributors(id) {
    let url: string = "http://api.followthemoney.org/?p=0&c-t-id=" + id + "&y=2016&c-exi=1&gro=d-eid&APIKey=" + this.apiKey + "&mode=json";
    return this.http.get(url).map(this.extractData);
  }

  getContributorCandidates(id) {
    let url: string = "http://api.followthemoney.org/?d-eid=" + id + "&y=2016&c-exi=1&gro=c-t-id&APIKey=" + this.apiKey + "&mode=json";
    return this.http.get(url).map(this.extractData);
  }
}
