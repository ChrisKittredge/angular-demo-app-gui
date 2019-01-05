import { Action } from '@ngrx/store';
import { IExTradingSymbol } from 'src/app/models/iexTrading/symbol/model';
 
export enum ActionTypes {
  LoadStockChartData = '[Stocks] Load Stock Chart Data',
  LoadStockChartDataSuccess = '[Stocks] Load Stock Chart Data Success',
  LoadStockChartDataFailure = '[Stocks] Load Stock Chart Data Failure',
  LoadStockSymbols = '[Stocks] Load Stock Symbols',
  LoadStockSymbolsSuccess = '[Stocks] Load Stock Symbols Success',
  LoadStockSymbolsFailure = '[Stocks] Load Stock Symbols Failure',
}

export class LoadStockChartDataAction implements Action {
  readonly type: typeof ActionTypes.LoadStockChartData = ActionTypes.LoadStockChartData;
}

export class LoadStockChartDataSuccessAction implements Action {
  readonly type: typeof ActionTypes.LoadStockChartDataSuccess = ActionTypes.LoadStockChartDataSuccess;
}

export class LoadStockChartDataFailureAction implements Action {
  readonly type: typeof ActionTypes.LoadStockChartDataFailure = ActionTypes.LoadStockChartDataFailure;
}
 
export class LoadStockSymbolsAction implements Action {
  readonly type: typeof ActionTypes.LoadStockSymbols = ActionTypes.LoadStockSymbols;
}

export class LoadStockSymbolsSuccessAction implements Action {
  readonly type: typeof ActionTypes.LoadStockSymbolsSuccess = ActionTypes.LoadStockSymbolsSuccess;
  constructor(public symbols: IExTradingSymbol[]) { }
}

export class LoadStockSymbolsFailureAction implements Action {
  readonly type: typeof ActionTypes.LoadStockSymbolsFailure = ActionTypes.LoadStockSymbolsFailure;
}

export type Actions =
  | LoadStockChartDataAction
  | LoadStockChartDataSuccessAction
  | LoadStockChartDataFailureAction
  | LoadStockSymbolsAction
  | LoadStockSymbolsSuccessAction
  | LoadStockSymbolsFailureAction
;