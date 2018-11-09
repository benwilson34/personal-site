import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasymarkersComponent } from './easymarkers.component';

describe('EasymarkersComponent', () => {
  let component: EasymarkersComponent;
  let fixture: ComponentFixture<EasymarkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasymarkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasymarkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
