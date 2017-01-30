import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ApiComponent } from './api/api.component';
=======
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { routing } from './app.routing';
>>>>>>> 8fb904eda9e603881444d7336b1bec7562bdee42

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ApiComponent
=======
    AboutComponent,
    HomeComponent,
    SearchComponent,
    CandidateDetailsComponent
>>>>>>> 8fb904eda9e603881444d7336b1bec7562bdee42
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
