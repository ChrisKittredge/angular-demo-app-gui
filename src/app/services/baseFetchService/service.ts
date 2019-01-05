import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { BaseFetchRepo } from 'src/app/repos/baseFetchRepo';
import { map } from 'rxjs/operators';

interface ConstructableModel<IModel, IModelClass> {
  new(iClass: IModel): IModelClass
}

@Injectable({ providedIn: 'root' })
export abstract class BaseFetchService<
  IModel, ModelClass
> {
  abstract modelClass: ConstructableModel<IModel, ModelClass>;
  abstract repo: BaseFetchRepo<any>;

  get(): Observable<any> {
    return this.repo.get()
      .pipe(map((resp) => resp.map((r) => this._convertToModel(r))))
  }

  _convertToModel = (iModel: IModel): ModelClass => new this.modelClass(iModel);

}