import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-federal',
  templateUrl: './federal.component.html',
  styleUrls: ['./federal.component.css'],
  providers: [SearchService]

})
export class FederalComponent implements OnInit {
  candidates: Object[] = [];
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.getResults("us").subscribe(res => this.candidates = res)
  }

}
