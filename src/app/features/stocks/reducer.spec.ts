import {
  initialState,
  stocksReducer,
  StocksState,
} from './reducer';
import { UnknownAction } from '../../utils/testing/actions';
import {
  iexTradingSymbolFactory,
} from '@models/iexTrading/symbol/model.factory';
import {
  LoadStockSymbolsAction,
  LoadStockSymbolsFailureAction,
  LoadStockSymbolsSuccessAction,
  LoadStockChartDataAction,
  LoadStockChartDataSuccessAction,
  LoadStockChartDataFailureAction,
} from './actions';

describe('Stocks Reducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      expect(
        stocksReducer(undefined, new UnknownAction() as any)
      ).toBe(initialState);
    });
  });

  describe('known actions', () => {
    describe('LoadStockChartDataAction', () => {
      it('should set isLoadingChartData to true', () => {
        const state: StocksState = {
          ...initialState,
          isLoadingChartData: false,
        };
        const actual = stocksReducer(state, new LoadStockChartDataAction());
        const expected = { ...initialState, isLoadingChartData: true };
        expect(actual).toEqual(expected);
      });
    });

    describe('LoadStockChartDataSuccessAction', () => {
      it('should set isLoadingChartData to true', () => {
        const state: StocksState = {
          ...initialState,
          isLoadingChartData: true,
        };
        const actual = stocksReducer(state, new LoadStockChartDataSuccessAction());
        const expected = { ...initialState, isLoadingChartData: false };
        expect(actual).toEqual(expected);
      });
    });

    describe('LoadStockChartDataAction', () => {
      it('should set isLoadingChartData to true', () => {
        const state: StocksState = {
          ...initialState,
          isLoadingChartData: true,
        };
        const actual = stocksReducer(state, new LoadStockChartDataFailureAction());
        const expected = { ...initialState, isLoadingChartData: false };
        expect(actual).toEqual(expected);
      });
    });

    describe('LoadStockSymbolsAction', () => {
      it('should set isLoadingSymbols to true', () => {
        const state: StocksState = {
          ...initialState,
          isLoadingSymbols: false,
        };
        const actual = stocksReducer(state, new LoadStockSymbolsAction());
        const expected = { ...initialState, isLoadingSymbols: true };
        expect(actual).toEqual(expected);
      });
    });
    
    describe('LoadStockSymbolsSuccessAction', () => {
      it('should set isLoadingSymbols to false and set symbols', () => {
        const state: StocksState = {
          ...initialState,
          isLoadingSymbols: true,
          symbols: [],
        };
        const symbols = [iexTradingSymbolFactory()];
        const actual = stocksReducer(
          state, new LoadStockSymbolsSuccessAction(symbols)
        );
        const expected = { ...initialState, isLoadingSymbols: false, symbols };
        expect(actual).toEqual(expected);
      });
    });

    describe('LoadStockSymbolsFailureAction', () => {
      it('should set isLoadingSymbols to false', () => {
        const state: StocksState = {
          ...initialState,
          isLoadingSymbols: true,
        };
        const actual = stocksReducer(state, new LoadStockSymbolsFailureAction());
        const expected = { ...initialState, isLoadingSymbols: false };
        expect(actual).toEqual(expected);
      });
    });
  });

});