import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor() { }
  selectedTab: string = "federal";
  setActive(tab) {
    this.selectedTab = tab;
  }

  isFederal(level) {
    if(level === "federal") {
      return "active"
    }
    else {
      return ""
    }
  }

  isState(level) {
    if (level === "state") {
      return "active"
    }
    else {
      return ""
    }
  }

  isOffice(level) {
    if(level === "officeSought") {
      return "active"
    }
    else {
      return ""
    }
  }


  ngOnInit() {
  }

}
