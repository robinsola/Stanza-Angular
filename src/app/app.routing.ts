import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SplashComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'results',
    component: ResultsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
