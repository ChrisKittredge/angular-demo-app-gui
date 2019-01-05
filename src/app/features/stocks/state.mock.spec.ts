import { StocksState } from './reducer';

test.skip('skip', () => {})

export const getMockState = (
    overrides?: Partial<StocksState>
): StocksState => ({
    isLoadingChartData: false,
    isLoadingSymbols: false,
    symbols: [],
    ...overrides,
});