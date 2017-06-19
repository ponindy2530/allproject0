/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CkrgtComponent } from './ckrgt.component';

describe('CkrgtComponent', () => {
  let component: CkrgtComponent;
  let fixture: ComponentFixture<CkrgtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CkrgtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CkrgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
