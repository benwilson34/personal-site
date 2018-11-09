import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AugmentbycolorComponent } from './augmentbycolor.component';

describe('AugmentbycolorComponent', () => {
  let component: AugmentbycolorComponent;
  let fixture: ComponentFixture<AugmentbycolorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AugmentbycolorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AugmentbycolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
