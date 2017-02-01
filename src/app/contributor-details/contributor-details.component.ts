import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Location } from '@angular/common';
import { SearchService } from '../search.service';
import { TitlecasePipe} from '../titlecase.pipe';

@Component({
  selector: 'app-contributor-details',
  templateUrl: './contributor-details.component.html',
  styleUrls: ['./contributor-details.component.css'],
  providers: [SearchService]
})
export class ContributorDetailsComponent implements OnInit {
  contributorId: string;
  contributors;
  candidates: Object[];
  constructor(private route: ActivatedRoute, private location: Location, private searchService: SearchService, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.contributorId = urlParameters['id'];
    })
    this.searchService.getContributorDetails(this.contributorId).subscribe(res => this.contributors = res);
    this.searchService.getContributorCandidates(this.contributorId).subscribe(res => this.candidates = res);
  }

  goToCandidate(candidate) {
    this.router.navigate(['candidates', candidate.Candidate.id]);
  }

  goBack() {
    this.location.back();
  }

}
