import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { StockSymbolsTypeaheadComponent } from './components';
import { StocksContainerComponent } from './containers';
import { StocksRoutingModule } from './routing.module';
import { STATE_NAME } from './consts';
import { stocksReducer } from './reducer';
import { StocksEffects } from './effects';

@NgModule({
  declarations: [
    StocksContainerComponent,
    StockSymbolsTypeaheadComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([StocksEffects]),
    FormsModule,
    MatAutocompleteModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatOptionModule,
    ReactiveFormsModule,
    StocksRoutingModule,
    StoreModule.forFeature(STATE_NAME, stocksReducer),
  ],
})
export class StocksModule { }
