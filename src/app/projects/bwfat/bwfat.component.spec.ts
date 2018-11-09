import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BwfatComponent } from './bwfat.component';

describe('BwfatComponent', () => {
  let component: BwfatComponent;
  let fixture: ComponentFixture<BwfatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BwfatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BwfatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
