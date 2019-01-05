import { Action } from '@ngrx/store';
 
export enum ActionTypes {
  TitleChanged = '[Global Header] Title Changed',
}
 
export class TitleChangedAction implements Action {
  readonly type: typeof ActionTypes.TitleChanged = ActionTypes.TitleChanged;
}
