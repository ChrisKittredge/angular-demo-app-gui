import { TestBed, async } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Store } from '@ngrx/store';

import { AppState } from '@app/app.state';
import { MockStore } from '@utils/testing/mockStore';

import { GlobalHeaderComponent } from './component';

xdescribe('AppComponent', () => {
  let mockStore: MockStore<Partial<AppState>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatToolbarModule],
      declarations: [GlobalHeaderComponent],
      providers: [
        { provide: Store, useClass: MockStore },
      ],
    }).compileComponents();

    mockStore = TestBed.get(Store);
  }));

  it('should', () => {
    const fixture = TestBed.createComponent(GlobalHeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-toolbar').textContent).toContain('Angular Demo App');
  });
});
