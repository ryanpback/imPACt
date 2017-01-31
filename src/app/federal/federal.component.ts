import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-federal',
  templateUrl: './federal.component.html',
  styleUrls: ['./federal.component.css'],
  providers: [SearchService]

})
export class FederalComponent implements OnInit {
  candidates: Object[] = [];
  constructor(private searchService: SearchService, private router: Router) { }

  ngOnInit() {
    this.searchService.getResults("us").subscribe(res => this.candidates = res);
    this.searchService.getCandidateDetails("211497").subscribe(res => console.log(res));
  }

  goToCandidate(candidate) {
    this.router.navigate(['candidates', candidate.Candidate.id]);
  }

}
