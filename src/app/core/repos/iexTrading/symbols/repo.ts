import { Injectable } from '@angular/core';

import { environment } from '@environments/environment';
import { IIExTradingSymbol } from '@models/iexTrading/symbol/model';

import { BaseFetchRepo } from '../../baseFetchRepo';

export interface IExTradingSymbolJSON extends IIExTradingSymbol {};

@Injectable({
  providedIn: 'root',
})
export class IExTradingSymbolsRepo extends BaseFetchRepo<IExTradingSymbolJSON[]> {
  getBaseEndpoint = () => environment.iexTradingBaseEndpoint;
  getEndpoint = () => '/ref-data/symbols';
}
