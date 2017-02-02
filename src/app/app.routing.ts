import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { OverviewComponent} from './overview/overview.component';
import { AboutComponent} from './about/about.component';
import { SearchComponent } from './search/search.component';
import { ContributorDetailsComponent } from './contributor-details/contributor-details.component'
import { OfficeDetailsComponent } from './office-details/office-details.component';

const appRoutes: Routes = [
  {
    path: '',
    component: OverviewComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'candidates/:id',
    component: CandidateDetailsComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'contributors/:id',
    component: ContributorDetailsComponent
  },
  {
    path: 'offices/:id/:year',
    component: OfficeDetailsComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
