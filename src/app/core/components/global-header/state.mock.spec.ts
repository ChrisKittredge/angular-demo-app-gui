import { GlobalHeaderState } from './reducer';

test.skip('skip', () => {})

export const getMockState = (overrides?: Partial<GlobalHeaderState>): GlobalHeaderState => ({
    navRoutes: [],
    title: 'title',
    ...overrides,
});