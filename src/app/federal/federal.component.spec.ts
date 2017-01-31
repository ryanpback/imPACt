/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FederalComponent } from './federal.component';

describe('FederalComponent', () => {
  let component: FederalComponent;
  let fixture: ComponentFixture<FederalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FederalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FederalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
