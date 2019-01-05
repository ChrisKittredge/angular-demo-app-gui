import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from 'src/app/app.state';
import {
  getGlobalHeaderTitle,
  getNavRoutes,
} from '../../selectors';

@Component({
  selector: 'app-global-header-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class GlobalHeaderContainerComponent {

  navRoutes$ = this.store.pipe(select(getNavRoutes));
  title$ = this.store.pipe(select(getGlobalHeaderTitle));

  constructor(
    private store: Store<AppState>,
  ) {}
}
