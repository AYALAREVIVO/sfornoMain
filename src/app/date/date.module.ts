import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatePageRoutingModule } from './date-routing.module';

import { DatePage } from './date.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatePageRoutingModule
  ],
  declarations: [DatePage]
})
export class DatePageModule {}
