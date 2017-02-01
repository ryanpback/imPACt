import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from '@angular/common';
import { SearchService } from '../search.service';
import { TitlecasePipe} from '../titlecase.pipe';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css'],
  providers: [SearchService]
})
export class CandidateDetailsComponent implements OnInit {
  candidateId: string;
  candidates;
  contributors: Object[];
  constructor(private route: ActivatedRoute, private location: Location, private searchService: SearchService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.candidateId = urlParameters['id'];
    })
    this.searchService.getCandidateDetails(this.candidateId).subscribe(res => this.candidates = res);
    this.searchService.getCandidateContributors(this.candidateId).subscribe(res => this.contributors = res);
  }

}
