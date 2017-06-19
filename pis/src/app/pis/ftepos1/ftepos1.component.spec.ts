/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ftepos1Component } from './ftepos1.component';

describe('Ftepos1Component', () => {
  let component: Ftepos1Component;
  let fixture: ComponentFixture<Ftepos1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ftepos1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ftepos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
