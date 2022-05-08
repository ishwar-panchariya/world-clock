import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ClockSearchPageRoutingModule } from './clock-search-routing.module';

import { ClockSearchPage } from './clock-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClockSearchPageRoutingModule, 
    Ng2SearchPipeModule
  ],
  declarations: [ClockSearchPage]
})
export class ClockSearchPageModule {}
