import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {
  img;
  constructor(private searchService: SearchService) { }
  // google = new Scraper.Google();
  ngOnInit() {
    // this.google.list({
    //   keyword: 'Kamala Harris',
    //   num: 1,
    //   detail: true
    // }).then(res => console.log(res));
  }

  search(selection: string) {
  this.searchService.getResults(selection);
  }

}
