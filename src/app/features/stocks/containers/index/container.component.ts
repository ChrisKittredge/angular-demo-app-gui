import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from '@app/app.state';

import { getStockSymbols } from '../../selectors';

@Component({
  selector: 'app-stocks-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class StocksContainerComponent {

  symbols$ = this.store.pipe(select(getStockSymbols));

  constructor(
    private store: Store<AppState>,
  ) { }
 
}
