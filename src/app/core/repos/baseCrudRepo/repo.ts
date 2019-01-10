import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseCrudRepo<T> {

  public baseEndpoint: string;

  public index(): Observable<T> {
    return of('' as unknown as T);
  }

}