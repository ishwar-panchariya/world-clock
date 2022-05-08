import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClockSearchPage } from './clock-search.page';

const routes: Routes = [
  {
    path: '',
    component: ClockSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClockSearchPageRoutingModule {}
