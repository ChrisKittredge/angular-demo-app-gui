import { createSelector } from '@ngrx/store';

import { AppState } from 'src/app/app.state';
import { STATE_NAME } from './consts';


export const getStocksState = createSelector(
  (rootState: AppState) => rootState[STATE_NAME]
);

export const getStockSymbols = createSelector(
  getStocksState,
  (state) => state.symbols
);