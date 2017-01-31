import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { OverviewComponent} from './overview/overview.component';
import { AboutComponent} from './about/about.component';
import { SearchComponent } from './search/search.component';

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
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
