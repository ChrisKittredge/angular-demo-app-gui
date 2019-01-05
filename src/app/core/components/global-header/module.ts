import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import {
  GlobalHeaderComponent,
} from './components';
import {
  GlobalHeaderContainerComponent
} from './containers';

@NgModule({
  declarations: [
    GlobalHeaderComponent,
    GlobalHeaderContainerComponent,
  ],
  imports: [
      CommonModule,
      FlexLayoutModule,
      MatButtonModule,
      MatIconModule,
      MatToolbarModule,
      RouterModule,
    ],
  exports: [GlobalHeaderContainerComponent],
})
export class GlobalHeaderModule { }
