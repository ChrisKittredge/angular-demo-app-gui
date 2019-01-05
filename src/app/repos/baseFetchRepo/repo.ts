import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BaseFetchRepo<Response> {

  public getBaseEndpoint() {
    throw new Error('[BaseFetchRepo] getBaseEndpoint() must be overridden!');
  }

  public getEndpoint() {
    throw new Error('[BaseFetchRepo] getBase() must be overridden!');
  }

  get(): Observable<Response> {
    return this.http.get(
      `${this.getBaseEndpoint()}/${this.getEndpoint()}`
    ) as Observable<Response>;
  }

  constructor(private http: HttpClient) { }

}