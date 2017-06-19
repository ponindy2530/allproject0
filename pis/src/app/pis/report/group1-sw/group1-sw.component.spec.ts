/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Group1SwComponent } from './group1-sw.component';

describe('Group1SwComponent', () => {
  let component: Group1SwComponent;
  let fixture: ComponentFixture<Group1SwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Group1SwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Group1SwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
