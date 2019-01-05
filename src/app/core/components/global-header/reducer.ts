import { Action } from '@ngrx/store';
import { ActionTypes } from './actions';
import { INavRoute } from './interfaces';
import { DEFAULT_ROUTES } from './consts';

export interface GlobalHeaderState {
  navRoutes: INavRoute[],
  title: string,
}
 
export const initialState = {
  navRoutes: DEFAULT_ROUTES,
  title: 'Angular Demo App',
}
 
export function globalHeaderReducer(state = initialState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}