import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { OfficePipe } from '../office.pipe';
import { Router } from '@angular/router';
import { TitlecasePipe } from '../titlecase.pipe'

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css'],
  providers: [SearchService]
})
export class StateComponent implements OnInit {
  candidates: Object[] = [];
  hasState: boolean = false;
  selectedState: string;
  hasCandidates: boolean = false;
  selectedOffice: string;
  year:string = this.searchService.getYear();

  constructor(private searchService: SearchService, private router: Router) { }

  checkCandidates() {
    if(this.candidates.length > 0) {
      if(this.candidates[0] !== "No Records"){
        this.hasCandidates = true;
      }
    }
  }

  ngOnInit() {
    this.checkCandidates();
  }

  ngDoCheck() {
    this.checkCandidates();
  }

  onChange(userChoice) {
    this.selectedOffice = userChoice;
  }

  search(selection: string) {
    this.hasState = true;
    this.searchService.getResults(selection, this.year).subscribe(res => this.candidates = res);
    this.selectedState = selection;
  }

  goToCandidate(candidate) {
    this.router.navigate(['candidates', candidate.Candidate.id]);
  }

  goToOffice(candidate) {
    this.router.navigate(['offices', candidate.Office_Sought.id])
  }

  yearSelection(year) {
    this.year = year;
    this.searchService.getResults(this.selectedState, this.year).subscribe(res => this.candidates = res);
  }

}
