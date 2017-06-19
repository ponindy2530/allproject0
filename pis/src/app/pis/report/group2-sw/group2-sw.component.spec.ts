/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Group2SwComponent } from './group2-sw.component';

describe('Group2SwComponent', () => {
  let component: Group2SwComponent;
  let fixture: ComponentFixture<Group2SwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Group2SwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Group2SwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
