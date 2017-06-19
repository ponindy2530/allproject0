/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Group1SsoComponent } from './group1-sso.component';

describe('Group1SsoComponent', () => {
  let component: Group1SsoComponent;
  let fixture: ComponentFixture<Group1SsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Group1SsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Group1SsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
