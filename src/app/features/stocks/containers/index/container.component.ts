import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { LoadStockSymbolsAction } from '../../actions';
import { getStockSymbols } from '../../selectors';

@Component({
  selector: 'app-stocks-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class StocksContainerComponent implements OnInit {

  symbols$ = this.store.pipe(select(getStockSymbols));

  ngOnInit() {
    this.store.dispatch(new LoadStockSymbolsAction());
  }

  constructor(
    private store: Store<AppState>,
  ) { }
 
}
