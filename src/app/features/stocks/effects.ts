import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError, filter } from 'rxjs/operators';
import { ActionTypes, LoadStockSymbolsAction, LoadStockSymbolsSuccessAction, LoadStockSymbolsFailureAction } from './actions';
import { IExTradingSymbolsService } from 'src/app/services';
import {
  RouterNavigatedAction,
  ROUTER_NAVIGATED,
} from '@ngrx/router-store';

@Injectable()
export class StocksEffects {

  @Effect()
  stocksRouteNavigated$: Observable<Action> = this.actions$.pipe(
    ofType<RouterNavigatedAction>(ROUTER_NAVIGATED),
    filter((action) => action.payload.event.url === '/stocks'),
    map(() => new LoadStockSymbolsAction())
  );
  
  @Effect()
  loadStockSymbols$: Observable<Action> = this.actions$.pipe(
    ofType<LoadStockSymbolsAction>(ActionTypes.LoadStockSymbols),
    switchMap(() =>
      this.iexTradingService.get().pipe(
        map((symbols) =>
          new LoadStockSymbolsSuccessAction(symbols)
        ),
        catchError(() => of(new LoadStockSymbolsFailureAction()))
      )
    )
  );

  constructor(
    public iexTradingService: IExTradingSymbolsService,
    private actions$: Actions,
  ) {}
}