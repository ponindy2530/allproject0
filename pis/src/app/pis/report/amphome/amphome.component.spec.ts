/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AmphomeComponent } from './amphome.component';

describe('AmphomeComponent', () => {
  let component: AmphomeComponent;
  let fixture: ComponentFixture<AmphomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmphomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmphomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
