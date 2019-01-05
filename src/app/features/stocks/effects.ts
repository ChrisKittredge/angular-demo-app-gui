import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { ActionTypes, LoadStockSymbolsAction, LoadStockSymbolsSuccessAction, LoadStockSymbolsFailureAction } from './actions';
import { IExTradingSymbolsService } from 'src/app/services';

@Injectable()
export class StocksEffects {
  // Listen for the 'LOGIN' action
  @Effect()
  loadStockSymbols$: Observable<Action> = this.actions$.pipe(
    ofType<LoadStockSymbolsAction>(ActionTypes.LoadStockSymbols),
    switchMap(action =>
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