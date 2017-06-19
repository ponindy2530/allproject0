/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OpenroomComponent } from './openroom.component';

describe('OpenroomComponent', () => {
  let component: OpenroomComponent;
  let fixture: ComponentFixture<OpenroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
