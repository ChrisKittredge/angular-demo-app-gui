import {
  IExTradingSymbol,
  IIExTradingSymbol,
} from "./model";

export const iexTradingSymbolFactory = (
  index: number = 0,
  overrides: Partial<IIExTradingSymbol> = {},
): IExTradingSymbol => {
  return new IExTradingSymbol({
    symbol: `symbol_${index}`,
    name: `name_${index}`,
    date: '2018-01-01',
    isEnabled: true,
    type: `type_${index}`,
    iexId: `id_${index}`,
    ...overrides,
  });
};