import { INavRoute } from './interfaces';
import { ROUTE_STOCKS } from 'src/app/app.consts';

export const DEFAULT_ROUTES: INavRoute[] = [
  { name: 'Stocks', routerLink: `${ROUTE_STOCKS}` }
];
export const STATE_NAME: 'globalHeaderState' = 'globalHeaderState';