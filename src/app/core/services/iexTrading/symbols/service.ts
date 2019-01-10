import { BaseFetchService } from '../../baseFetchService';
import { Injectable } from '@angular/core';

import { IExTradingSymbol, IIExTradingSymbol } from '@models/iexTrading/symbol/model';
import { IExTradingSymbolsRepo } from '@repos/index';

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
