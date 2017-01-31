import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'imPACt';
  displayedComponent = 'home'

  constructor() {}

  ngOnInit() {}

  getComponent(component) {
    this.displayedComponent = component;
  }
}
