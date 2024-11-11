import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactoLoginPage } from './contacto-login.page';

describe('ContactoLoginPage', () => {
  let component: ContactoLoginPage;
  let fixture: ComponentFixture<ContactoLoginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
