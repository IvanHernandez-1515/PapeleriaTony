import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarMarComponent } from './actualizar-mar.component';

describe('ActualizarMarComponent', () => {
  let component: ActualizarMarComponent;
  let fixture: ComponentFixture<ActualizarMarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarMarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarMarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
