import {
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';

import { STATE_NAME } from './consts';
import { StocksState } from './reducer';

export const getStocksState = createFeatureSelector<StocksState>(
  STATE_NAME
);

export const getStockSymbols = createSelector(
  getStocksState,
  (state) => state.symbols
);