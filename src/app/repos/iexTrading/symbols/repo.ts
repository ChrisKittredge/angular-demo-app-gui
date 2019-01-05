import { IIExTradingSymbol } from 'src/app/models/iexTrading/symbol/model';
import { BaseFetchRepo } from '../../baseFetchRepo';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface IExTradingSymbolJSON extends IIExTradingSymbol {};

@Injectable({
  providedIn: 'root',
})
export class IExTradingSymbolsRepo extends BaseFetchRepo<IExTradingSymbolJSON[]> {
  getBaseEndpoint = () => environment.iexTradingBaseEndpoint;
  getEndpoint = () => '/ref-data/symbols';
}
