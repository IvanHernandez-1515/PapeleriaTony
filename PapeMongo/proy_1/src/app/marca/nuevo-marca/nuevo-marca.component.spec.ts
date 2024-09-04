import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoMarcaComponent } from './nuevo-marca.component';

describe('NuevoMarcaComponent', () => {
  let component: NuevoMarcaComponent;
  let fixture: ComponentFixture<NuevoMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoMarcaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
