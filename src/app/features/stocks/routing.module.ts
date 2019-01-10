import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

import { STOCKS_ROUTE_NAME } from './consts';
import { StocksContainerComponent } from './containers/index/container.component';

const routes: Routes = [
  {
    path: '',
    component: StocksContainerComponent,
    data: {
      routeName: STOCKS_ROUTE_NAME
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StocksRoutingModule { }