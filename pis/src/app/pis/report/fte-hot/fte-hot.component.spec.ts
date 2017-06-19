/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FteHotComponent } from './fte-hot.component';

describe('FteHotComponent', () => {
  let component: FteHotComponent;
  let fixture: ComponentFixture<FteHotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FteHotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FteHotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
