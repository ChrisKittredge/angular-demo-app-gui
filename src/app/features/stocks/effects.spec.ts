import { Actions } from '@ngrx/effects';
import { empty, Observable, of, throwError } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';
import {
  RouterNavigatedAction,
  ROUTER_NAVIGATED,
} from '@ngrx/router-store';

import { IExTradingSymbolsService } from '@services/index';

import { StocksEffects } from './effects';
import { TestBed } from '@angular/core/testing';
import { LoadStockSymbolsAction, LoadStockSymbolsSuccessAction, LoadStockSymbolsFailureAction } from './actions';
import { iexTradingSymbolFactory } from '@models/iexTrading/symbol/model.factory';

export class TestActions extends Actions {
  constructor() {
    super(empty())
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }

}

export const getActions = () => new TestActions();

describe('StocksEffects', () => {
  let actions: TestActions;
  let effects: StocksEffects;
  let symbolsService: IExTradingSymbolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StocksEffects,
        {
          provide: Actions,
          useFactory: getActions,
        },
        {
          provide: IExTradingSymbolsService,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    });

    actions = TestBed.get(Actions);
    effects = TestBed.get(StocksEffects);
    symbolsService = TestBed.get(IExTradingSymbolsService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('stockRouteNavigated$', () => {
    it("should do nothing when url does not match '/stocks'", () => {
      actions.stream = hot('a', {
        a: {
          type: ROUTER_NAVIGATED,
          payload: { event: { url: '' }},
        },
      });
      const expected = cold('');
      expect(effects.stocksRouteNavigated$).toBeObservable(expected);
    });

    it("should dispatch LoadStockSymbols action", () => {
      actions.stream = hot('a', {
        a: {
          type: ROUTER_NAVIGATED,
          payload: { event: { url: '/stocks' }},
        },
      });
      const expected = cold('b', {
        b:  new LoadStockSymbolsAction(),
      });
      expect(effects.stocksRouteNavigated$).toBeObservable(expected);
    });
  });

  describe('loadStockSymbols$', () => {
    it("should dispatch LoadStockSymbolsSuccessAction", () => {
      actions.stream = hot('a', {
        a: new LoadStockSymbolsAction(),
      });
      const resp = [iexTradingSymbolFactory()];
      symbolsService.get = jest.fn(() => of(resp));
      const expected = cold('b', {
        b:  new LoadStockSymbolsSuccessAction(resp),
      });
      expect(effects.loadStockSymbols$).toBeObservable(expected);
    });

    it("should dispatch LoadStockSymbolsFailureAction", () => {
      actions.stream = hot('a', {
        a: new LoadStockSymbolsAction(),
      });
      symbolsService.get = jest.fn(() => throwError(''));
      const expected = cold('b', {
        b:  new LoadStockSymbolsFailureAction(),
      });
      expect(effects.loadStockSymbols$).toBeObservable(expected);
    });
  });
});