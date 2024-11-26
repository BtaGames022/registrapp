import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagAdminPage } from './pag-admin.page';

describe('PagAdminPage', () => {
  let component: PagAdminPage;
  let fixture: ComponentFixture<PagAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PagAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
