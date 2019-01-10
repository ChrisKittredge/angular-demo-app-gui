import {
  iexTradingSymbolFactory,
} from '@models/iexTrading/symbol/model.factory';

import { STATE_NAME } from './consts';
import {
  getStockSymbols,
  getStocksState,
} from "./selectors";
import { getMockState } from './state.mock.spec';


describe('Stocks Selectors', () => {
  describe('getStocksState', () => {
    it('should return stocksState from full state', () => {
      const state = {
        [STATE_NAME]: getMockState()
      };
      const actual = getStocksState(state);
      expect(actual).toEqual(state[STATE_NAME]);
    });
  });

  describe('getStockSymbols', () => {
    it('should return symbols', () => {
      const symbols = [iexTradingSymbolFactory()];
      const state = {
        [STATE_NAME]: {
          ...getMockState(),
          symbols,
        },
      };
      const actual = getStockSymbols(state);
      expect(actual).toEqual(symbols);
    });
  });

});