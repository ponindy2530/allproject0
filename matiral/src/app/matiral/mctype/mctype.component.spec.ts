/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MctypeComponent } from './mctype.component';

describe('MctypeComponent', () => {
  let component: MctypeComponent;
  let fixture: ComponentFixture<MctypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MctypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MctypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
