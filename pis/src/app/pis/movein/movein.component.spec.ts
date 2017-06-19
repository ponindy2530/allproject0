/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MoveinComponent } from './movein.component';

describe('MoveinComponent', () => {
  let component: MoveinComponent;
  let fixture: ComponentFixture<MoveinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
