/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GendentComponent } from './gendent.component';

describe('GendentComponent', () => {
  let component: GendentComponent;
  let fixture: ComponentFixture<GendentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GendentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GendentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
