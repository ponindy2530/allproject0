/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RepMatiralComponent } from './rep-matiral.component';

describe('RepMatiralComponent', () => {
  let component: RepMatiralComponent;
  let fixture: ComponentFixture<RepMatiralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepMatiralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepMatiralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
