import { BaseFetchService } from '../../baseFetchService';
import { Injectable } from '@angular/core';
import { IExTradingSymbolsRepo } from 'src/app/repos';
import { IExTradingSymbol, IIExTradingSymbol } from 'src/app/models/iexTrading/symbol/model';

@Injectable({ providedIn: 'root' })
export class IExTradingSymbolsService extends BaseFetchService<
  IIExTradingSymbol, IExTradingSymbol
> {
  modelClass = IExTradingSymbol;

  constructor(
    public repo: IExTradingSymbolsRepo,
  ) {
    super();
  }
}
