import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagEstudiantePage } from './pag-estudiante.page';

describe('PagEstudiantePage', () => {
  let component: PagEstudiantePage;
  let fixture: ComponentFixture<PagEstudiantePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PagEstudiantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
