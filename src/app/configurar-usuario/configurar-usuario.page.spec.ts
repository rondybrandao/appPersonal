import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurarUsuarioPage } from './configurar-usuario.page';

describe('ConfigurarUsuarioPage', () => {
  let component: ConfigurarUsuarioPage;
  let fixture: ComponentFixture<ConfigurarUsuarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurarUsuarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurarUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
