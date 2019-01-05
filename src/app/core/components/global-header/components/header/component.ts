import { Component, Input } from '@angular/core';
import { INavRoute } from '../../interfaces';

@Component({
  selector: 'app-global-header',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class GlobalHeaderComponent {
  @Input() navRoutes: INavRoute[] = [];
  @Input() title: string = '';
}
