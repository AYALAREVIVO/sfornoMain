import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalisPageRoutingModule } from './detalis-routing.module';

import { DetalisPage } from './detalis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalisPageRoutingModule
  ],
  declarations: [DetalisPage]
})
export class DetalisPageModule {}
