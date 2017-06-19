/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FteComponent } from './fte.component';

describe('FteComponent', () => {
  let component: FteComponent;
  let fixture: ComponentFixture<FteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
