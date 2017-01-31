import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { OfficePipe } from '../office.pipe';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css'],
  providers: [SearchService]
})
export class StateComponent implements OnInit {
  candidates: Object[] = [];
  selectedState: boolean = false;
  constructor(private searchService: SearchService) { }

  selectedOffice: string;

  ngOnInit() {
  }

  onChange(userChoice) {
    this.selectedOffice = userChoice;
  }

  search(selection: string) {
    this.selectedState = true;
    this.searchService.getResults(selection).subscribe(res => this.candidates = res);
  }

}
