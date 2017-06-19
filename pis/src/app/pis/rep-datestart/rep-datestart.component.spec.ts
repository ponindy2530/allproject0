/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RepDatestartComponent } from './rep-datestart.component';

describe('RepDatestartComponent', () => {
  let component: RepDatestartComponent;
  let fixture: ComponentFixture<RepDatestartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepDatestartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepDatestartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
