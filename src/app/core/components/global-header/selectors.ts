import { createSelector } from '@ngrx/store';

import { STATE_NAME } from './consts';
import { AppState } from '../../../app.state';

export const getGlobalHeaderState = createSelector(
  (state: AppState) => state[STATE_NAME]
);

export const getGlobalHeaderTitle = createSelector(
  getGlobalHeaderState,
  (state) => state.title
);

export const getNavRoutes = createSelector(
  getGlobalHeaderState,
  (state) => state.navRoutes
);