import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

import { StocksContainerComponent } from './containers/index/container.component';

const routes: Routes = [
  {
    path: '',
    component: StocksContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StocksRoutingModule { }