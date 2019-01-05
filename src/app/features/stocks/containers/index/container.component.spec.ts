import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksContainerComponent } from './container.component';

xdescribe('StocksContainerComponent', () => {
  let component: StocksContainerComponent;
  let fixture: ComponentFixture<StocksContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocksContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
