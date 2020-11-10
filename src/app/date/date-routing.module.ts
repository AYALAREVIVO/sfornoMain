import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatePage } from './date.page';

const routes: Routes = [
  {
    path: '',
    component: DatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatePageRoutingModule {}
