/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RpdentComponent } from './rpdent.component';

describe('RpdentComponent', () => {
  let component: RpdentComponent;
  let fixture: ComponentFixture<RpdentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpdentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpdentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
