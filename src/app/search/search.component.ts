import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {

  constructor(private searchService: SearchService) { }
  selectedSearch: String = null;

  setSearch(searchType) {
    this.selectedSearch = searchType;
  }

  ngOnInit() {
  }

  search(selection: string) {
  this.searchService.getResults(selection);
  }

}
