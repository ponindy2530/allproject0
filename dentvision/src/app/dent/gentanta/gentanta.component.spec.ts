/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GentantaComponent } from './gentanta.component';

describe('GentantaComponent', () => {
  let component: GentantaComponent;
  let fixture: ComponentFixture<GentantaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GentantaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GentantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
