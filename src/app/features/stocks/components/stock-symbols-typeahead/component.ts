import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

import { IExTradingSymbol } from '@models/iexTrading/symbol/model';

@Component({
  selector: 'app-stock-symbols-typeahead',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class StockSymbolsTypeaheadComponent {

  formControl = new FormControl();
  filteredSymbols: Observable<IExTradingSymbol[]>;

  @Input() symbols: IExTradingSymbol[] = [];

  @Output() onValueSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.filteredSymbols = this.formControl.valueChanges.pipe(
      startWith(''),
      map((val) => !!val ? this._filterValues(val) : [])
    );
  }

  private _filterValues(val: string): IExTradingSymbol[] {
    const filterVal = val.toLowerCase();
    const filtered = this.symbols
      .filter((option) =>
        option.name.toLowerCase().indexOf(filterVal) > -1
        || option.symbol.toLowerCase().indexOf(filterVal) > -1
      )
      .slice(0, 50);
    return filtered;
  }

}
