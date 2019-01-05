import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  ROUTE_STOCKS,
} from './app.consts';

const routes: Routes = [
  {
    path: ROUTE_STOCKS,
    loadChildren: './features/stocks/module#StocksModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
