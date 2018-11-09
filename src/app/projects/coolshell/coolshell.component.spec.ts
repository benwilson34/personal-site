import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolshellComponent } from './coolshell.component';

describe('CoolshellComponent', () => {
  let component: CoolshellComponent;
  let fixture: ComponentFixture<CoolshellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoolshellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolshellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
