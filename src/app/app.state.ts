import {
  STATE_NAME as GLOBAL_HEADER,
} from './core/components/global-header/consts';
import {
    GlobalHeaderState,
    globalHeaderReducer,
  } from './core/components/global-header/reducer';
import {
  STATE_NAME as STOCKS_STATE,
} from './features/stocks/consts';
import { StocksState } from './features/stocks/reducer';


export interface AppState {
  [GLOBAL_HEADER]: GlobalHeaderState;
  [STOCKS_STATE]: StocksState;
}

export const reducers = {
  [GLOBAL_HEADER]: globalHeaderReducer,
};