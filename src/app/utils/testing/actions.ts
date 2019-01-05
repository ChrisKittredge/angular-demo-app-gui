import { Action } from '@ngrx/store';
 
export enum ActionTypes {
  Unknown = '[Testing] Unknown Action',
}

export class UnknownAction implements Action {
  readonly type: typeof ActionTypes.Unknown = ActionTypes.Unknown;
}