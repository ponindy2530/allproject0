/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BeikComponent } from './beik.component';

describe('BeikComponent', () => {
  let component: BeikComponent;
  let fixture: ComponentFixture<BeikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
