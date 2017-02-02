import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
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

  constructor(private route: ActivatedRoute, private location: Location, private searchService: SearchService, private router: Router) { }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.candidateId = urlParameters['id'];
    })
    this.searchService.getCandidateDetails(this.candidateId).subscribe(res => this.candidates = res);
    this.searchService.getCandidateContributors(this.candidateId).subscribe(res => this.contributors = res);
  }

  goToContributor(contributor) {
    this.router.navigate(['contributors', contributor.Contributor.id])
  }
}

andrew
