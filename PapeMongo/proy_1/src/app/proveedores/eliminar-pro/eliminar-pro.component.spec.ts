import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProComponent } from './eliminar-pro.component';

describe('EliminarProComponent', () => {
  let component: EliminarProComponent;
  let fixture: ComponentFixture<EliminarProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
