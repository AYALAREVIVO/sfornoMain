import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalisPage } from './detalis.page';

const routes: Routes = [
  {
    path: '',
    component: DetalisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalisPageRoutingModule {}
