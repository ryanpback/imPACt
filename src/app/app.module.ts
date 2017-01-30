import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ApiComponent } from './api/api.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
// import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    ApiComponent,
    AboutComponent,
    HomeComponent,
    SearchComponent,
    CandidateDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    // routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
