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
import { FederalComponent } from './federal/federal.component';
import { StateComponent } from './state/state.component';
import { OverviewComponent } from './overview/overview.component';
import { OfficePipe } from './office.pipe';
import { routing } from './app.routing';
import { TitlecasePipe } from './titlecase.pipe';
import { ResultVisualsComponent } from './result-visuals/result-visuals.component';
import { PartyPipe } from './party.pipe';
import { ContributorDetailsComponent } from './contributor-details/contributor-details.component';
import { OfficeComponent } from './office/office.component';
import { OfficeDetailsComponent } from './office-details/office-details.component';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    AppComponent,
    ApiComponent,
    AboutComponent,
    HomeComponent,
    SearchComponent,
    CandidateDetailsComponent,
    FederalComponent,
    StateComponent,
    OverviewComponent,
    OfficePipe,
    TitlecasePipe,
    ResultVisualsComponent,
    PartyPipe,
    ContributorDetailsComponent,
    OfficeComponent,
    OfficeDetailsComponent,
    OfficeDetailsComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
