/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AvgComponent } from './avg.component';

describe('AvgComponent', () => {
  let component: AvgComponent;
  let fixture: ComponentFixture<AvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
