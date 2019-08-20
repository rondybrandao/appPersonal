import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalImageProgressPage } from './modal-image-progress.page';

describe('ModalImageProgressPage', () => {
  let component: ModalImageProgressPage;
  let fixture: ComponentFixture<ModalImageProgressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalImageProgressPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalImageProgressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
