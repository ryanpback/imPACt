import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { OfficePipe } from '../office.pipe';
import { Router } from '@angular/router';
import { TitlecasePipe } from '../titlecase.pipe';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css'],
  providers: [SearchService]
})
export class OfficeComponent implements OnInit {
  offices: Object[] = [];
  selectedState: boolean = false;
  constructor(private searchService: SearchService, private router: Router) { }

  selectedOffice: string;

  ngOnInit() {
  }

  onChange(userChoice) {
    this.selectedOffice = userChoice;
  }

  search(selection: string) {
    this.selectedState = true;
    this.searchService.getOffices(selection).subscribe(res => this.offices = res);
  }

  goToOffice(office) {
    this.router.navigate(['offices', office.Office_Sought.id]);
  }

}
