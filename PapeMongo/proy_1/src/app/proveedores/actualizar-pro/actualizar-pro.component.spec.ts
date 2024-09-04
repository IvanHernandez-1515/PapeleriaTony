import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarProComponent } from './actualizar-pro.component';

describe('ActualizarProComponent', () => {
  let component: ActualizarProComponent;
  let fixture: ComponentFixture<ActualizarProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
