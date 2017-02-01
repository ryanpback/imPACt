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
  hasState: boolean = false;
  selectedState: string;
  year:string = this.searchService.getYear();
  selectedOffice: string;
  hasOffices: boolean = false;

  constructor(private searchService: SearchService, private router: Router) { }

  ngOnInit() {
  }

  checkOffices() {
    if(this.offices.length > 0) {
      if(this.offices[0] !== "No Records"){
        this.hasOffices = true;
      }
    }
  }

  onChange(userChoice) {
    this.selectedOffice = userChoice;
  }

  ngDoCheck() {
    this.checkOffices();
  }


  search(selection: string) {
    this.hasState = true;
    this.searchService.getOffices(selection, this.year).subscribe(res => this.offices = res);
    this.selectedState = selection;
  }

  goToOffice(office) {
    this.router.navigate(['offices', office.Office_Sought.id, this.year]);
  }

  yearSelection(year) {
    this.year = year;
    this.searchService.getResults(this.selectedState, this.year).subscribe(res => this.offices = res);
  }

}
