/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { McgroupComponent } from './mcgroup.component';

describe('McgroupComponent', () => {
  let component: McgroupComponent;
  let fixture: ComponentFixture<McgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
