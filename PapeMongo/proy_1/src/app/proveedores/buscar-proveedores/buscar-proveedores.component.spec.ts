import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarProveedoresComponent } from './buscar-proveedores.component';

describe('BuscarProveedoresComponent', () => {
  let component: BuscarProveedoresComponent;
  let fixture: ComponentFixture<BuscarProveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarProveedoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
