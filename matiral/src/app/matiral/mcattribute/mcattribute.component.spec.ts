/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { McattributeComponent } from './mcattribute.component';

describe('McattributeComponent', () => {
  let component: McattributeComponent;
  let fixture: ComponentFixture<McattributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McattributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McattributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
