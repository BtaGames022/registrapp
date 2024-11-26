import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagMaestroPage } from './pag-maestro.page';

describe('PagMaestroPage', () => {
  let component: PagMaestroPage;
  let fixture: ComponentFixture<PagMaestroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PagMaestroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
