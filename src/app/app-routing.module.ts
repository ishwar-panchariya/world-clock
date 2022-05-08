import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'currency',
    loadChildren: () => import('./components/currency/currency.module').then( m => m.CurrencyPageModule)
  },
  {
    path: 'world-clock',
    loadChildren: () => import('./components/world-clock/world-clock.module').then( m => m.WorldClockPageModule)
  },
  {
    path: 'clock-search',
    loadChildren: () => import('./components/clock-search/clock-search.module').then( m => m.ClockSearchPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
