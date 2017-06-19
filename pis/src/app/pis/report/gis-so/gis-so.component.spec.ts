/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GisSoComponent } from './gis-so.component';

describe('GisSoComponent', () => {
  let component: GisSoComponent;
  let fixture: ComponentFixture<GisSoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GisSoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GisSoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
