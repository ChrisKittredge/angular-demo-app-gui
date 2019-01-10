import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { ReposModule } from '@repos/module';

import { BaseCrudService } from './baseCrudService';
import { IExTradingSymbolsService } from './iexTrading';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    ReposModule,
  ]
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
