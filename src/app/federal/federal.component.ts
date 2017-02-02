import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';
import { TitlecasePipe } from '../titlecase.pipe';

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
  }

  goToCandidate(candidate) {
    this.router.navigate(['candidates', candidate.Candidate.id]);

  }

}
