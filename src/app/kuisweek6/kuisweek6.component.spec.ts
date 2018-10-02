import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kuisweek6Component } from './kuisweek6.component';

describe('Kuisweek6Component', () => {
  let component: Kuisweek6Component;
  let fixture: ComponentFixture<Kuisweek6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kuisweek6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kuisweek6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
