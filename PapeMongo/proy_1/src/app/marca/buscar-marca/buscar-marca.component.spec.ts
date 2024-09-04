import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarMarcaComponent } from './buscar-marca.component';

describe('BuscarMarcaComponent', () => {
  let component: BuscarMarcaComponent;
  let fixture: ComponentFixture<BuscarMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarMarcaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
