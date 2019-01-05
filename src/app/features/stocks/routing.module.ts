import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

import { StocksContainerComponent } from './containers/index/container.component';
import { STOCKS_ROUTE_NAME } from './consts';

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