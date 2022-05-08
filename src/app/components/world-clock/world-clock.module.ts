import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorldClockPageRoutingModule } from './world-clock-routing.module';

import { WorldClockPage } from './world-clock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorldClockPageRoutingModule  ],
  declarations: [WorldClockPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class WorldClockPageModule {}
