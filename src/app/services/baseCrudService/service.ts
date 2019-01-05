import { Observable } from 'rxjs';

import { BaseCrudRepo } from 'src/app/repos/baseCrudRepo/repo';

export class BaseCrudService<T> {

  public repo: BaseCrudRepo<any>;

  public index(): Observable<T> {
    return this.repo.index();
  }

}