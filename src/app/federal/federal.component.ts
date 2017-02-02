import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';
import { TitlecasePipe } from '../titlecase.pipe'
import { PartyPipe } from '../party.pipe';


@Component({
  selector: 'app-federal',
  templateUrl: './federal.component.html',
  styleUrls: ['./federal.component.css'],
  providers: [SearchService]

})
export class FederalComponent implements OnInit {
  candidates: Object[] = [];
  partyChoice: string = 'all';
  hasCandidates: boolean = false;
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
    this.searchService.getResults("us", this.year).subscribe(res => this.candidates = res);
  }

  ngDoCheck() {
    this.checkCandidates()
  }

  goToCandidate(candidate) {
    this.router.navigate(['candidates', candidate.Candidate.id]);
  }

  partySelection(choice) {
    this.partyChoice = choice;
  }

  yearSelection(year) {
    this.year = year;
    this.searchService.getResults("us", this.year).subscribe(res => this.candidates = res);
  }

}
