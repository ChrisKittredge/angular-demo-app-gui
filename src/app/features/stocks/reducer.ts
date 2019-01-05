import {
  ActionTypes,
  Actions,
} from './actions';
import { IExTradingSymbol } from 'src/app/models/iexTrading/symbol/model';

export interface StocksState {
  isLoadingChartData: boolean,
  isLoadingSymbols: boolean,
  symbols: IExTradingSymbol[],
}

export const initialState = {
  isLoadingChartData: false,
  isLoadingSymbols: false,
  symbols: [],
};

export function stocksReducer(state = initialState, action: Actions) {
  switch (action.type) {

    case ActionTypes.LoadStockChartData: {
      return { ...state, isLoadingChartData: true };
    }

    case ActionTypes.LoadStockChartDataSuccess: {
      return { ...state, isLoadingChartData: false };
    }

    case ActionTypes.LoadStockChartDataFailure: {
      return { ...state, isLoadingChartData: false };
    }

    case ActionTypes.LoadStockSymbols: {
      return { ...state, isLoadingSymbols: true };
    }

    case ActionTypes.LoadStockSymbolsSuccess: {
      return {
        ...state,
        isLoadingSymbols: false,
        symbols: action.symbols,
      };
    }

    case ActionTypes.LoadStockSymbolsFailure: {
      return { ...state, isLoadingSymbols: false };
    }

    default:
      return state;
  }
}