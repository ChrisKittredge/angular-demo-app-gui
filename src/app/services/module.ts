import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { ReposModule } from '../repos/module';
import { BaseCrudService } from './baseCrudService';
import { BaseFetchService } from './baseFetchService';
import { IExTradingSymbolsService } from './iexTrading';
import { BaseCrudRepo } from '../repos';
import { BaseFetchRepo } from '../repos/baseFetchRepo';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    BaseCrudRepo,
    BaseFetchRepo,
  ],
})
export class ServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
        BaseCrudService,
        IExTradingSymbolsService,
      ],
    }
  }
}
