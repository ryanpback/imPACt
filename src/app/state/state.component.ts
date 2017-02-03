import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { OfficePipe } from '../office.pipe';
import { Router } from '@angular/router';
import { TitlecasePipe } from '../titlecase.pipe'
import { PartyPipe } from '../party.pipe';


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
  partyChoice: string = 'all';

  constructor(private searchService: SearchService, private router: Router) { }

  checkCandidates() {
    if(this.candidates.length > 0) {
      if(this.candidates[0] !== "No Records"){
        this.hasCandidates = true;
      }
    }
    else {
      this.hasCandidates = false;
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

  goToOffice(candidate, year) {
    this.router.navigate(['offices', candidate.Office_Sought.id, year])
  }

  yearSelection(year) {
    this.year = year;
    this.hasCandidates = false;
    this.searchService.getResults(this.selectedState, this.year).subscribe(res => this.candidates = res);
  }

  partySelection(choice) {
    this.partyChoice = choice;
  }

}
