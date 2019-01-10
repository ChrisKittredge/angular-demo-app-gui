import { Observable } from 'rxjs';

import { BaseCrudRepo } from '@repos/baseCrudRepo/repo';

export class BaseCrudService<T> {

  public repo: BaseCrudRepo<any>;

  public index(): Observable<T> {
    return this.repo.index();
  }

}