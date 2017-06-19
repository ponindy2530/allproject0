/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SecretroomComponent } from './secretroom.component';

describe('SecretroomComponent', () => {
  let component: SecretroomComponent;
  let fixture: ComponentFixture<SecretroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
