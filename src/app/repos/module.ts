import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { BaseCrudRepo } from './baseCrudRepo';
import { BaseFetchRepo } from './baseFetchRepo';
import { IExTradingSymbolsRepo } from './iexTrading';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
})
export class ReposModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ReposModule,
      providers: [
        BaseCrudRepo,
        BaseFetchRepo,
        IExTradingSymbolsRepo,
      ],
    }
  }
}
