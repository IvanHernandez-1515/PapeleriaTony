import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarMarComponent } from './eliminar-mar.component';

describe('EliminarMarComponent', () => {
  let component: EliminarMarComponent;
  let fixture: ComponentFixture<EliminarMarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarMarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarMarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
