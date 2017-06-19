/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KhunComponent } from './khun.component';

describe('KhunComponent', () => {
  let component: KhunComponent;
  let fixture: ComponentFixture<KhunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
