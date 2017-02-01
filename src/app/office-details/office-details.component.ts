import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Location } from '@angular/common';
import { SearchService } from '../search.service';
import { TitlecasePipe} from '../titlecase.pipe';

@Component({
  selector: 'app-office-details',
  templateUrl: './office-details.component.html',
  styleUrls: ['./office-details.component.css'],
  providers: [SearchService]
})
export class OfficeDetailsComponent implements OnInit {
  officeId: string;
  offices;
  candidates: Object[];

  constructor(private route: ActivatedRoute, private location: Location, private searchService: SearchService, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.officeId = urlParameters['id'];
    })
    this.searchService.getOfficeCandidates(this.officeId).subscribe(res => this.candidates = res);
  }

  goToCandidate(candidate) {
    this.router.navigate(['candidates', candidate.Candidate.id]);
  }

  goBack() {
    this.location.back();
  }
}
