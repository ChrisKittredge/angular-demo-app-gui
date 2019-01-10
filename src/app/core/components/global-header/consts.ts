import { ROUTE_STOCKS } from '@app/app.consts';

import { INavRoute } from './interfaces';

export const DEFAULT_ROUTES: INavRoute[] = [
  { name: 'Stocks', routerLink: `${ROUTE_STOCKS}` }
];
export const STATE_NAME: 'globalHeaderState' = 'globalHeaderState';