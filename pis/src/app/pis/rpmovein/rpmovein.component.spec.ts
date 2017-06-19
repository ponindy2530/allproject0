/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RpmoveinComponent } from './rpmovein.component';

describe('RpmoveinComponent', () => {
  let component: RpmoveinComponent;
  let fixture: ComponentFixture<RpmoveinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpmoveinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpmoveinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
