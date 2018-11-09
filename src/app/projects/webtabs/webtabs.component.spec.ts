import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebtabsComponent } from './webtabs.component';

describe('WebtabsComponent', () => {
  let component: WebtabsComponent;
  let fixture: ComponentFixture<WebtabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebtabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebtabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
