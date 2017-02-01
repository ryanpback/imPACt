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
  constructor(private searchService: SearchService, private router: Router) { }

  ngOnInit() {
    this.searchService.getResults("us").subscribe(res => this.candidates = res);
  }


  goToCandidate(candidate) {
    this.router.navigate(['candidates', candidate.Candidate.id]);
  }

  partySelection(choice) {
    this.partyChoice = choice;
  }

}
