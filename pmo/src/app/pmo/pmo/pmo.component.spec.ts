/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PmoComponent } from './pmo.component';

describe('PmoComponent', () => {
  let component: PmoComponent;
  let fixture: ComponentFixture<PmoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
