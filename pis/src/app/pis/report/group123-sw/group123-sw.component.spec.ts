/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Group123SwComponent } from './group123-sw.component';

describe('Group123SwComponent', () => {
  let component: Group123SwComponent;
  let fixture: ComponentFixture<Group123SwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Group123SwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Group123SwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
