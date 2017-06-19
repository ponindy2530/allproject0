/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Group3SwComponent } from './group3-sw.component';

describe('Group3SwComponent', () => {
  let component: Group3SwComponent;
  let fixture: ComponentFixture<Group3SwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Group3SwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Group3SwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
