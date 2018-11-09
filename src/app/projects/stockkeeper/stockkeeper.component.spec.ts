import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockkeeperComponent } from './stockkeeper.component';

describe('StockkeeperComponent', () => {
  let component: StockkeeperComponent;
  let fixture: ComponentFixture<StockkeeperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockkeeperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockkeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
