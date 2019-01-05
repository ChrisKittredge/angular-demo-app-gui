import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSymbolsTypeaheadComponent } from './component';

xdescribe('StockSymbolsTypeaheadComponent', () => {
  let component: StockSymbolsTypeaheadComponent;
  let fixture: ComponentFixture<StockSymbolsTypeaheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockSymbolsTypeaheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockSymbolsTypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
