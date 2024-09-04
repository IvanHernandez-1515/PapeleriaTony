import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMarComponent } from './main-mar.component';

describe('MainMarComponent', () => {
  let component: MainMarComponent;
  let fixture: ComponentFixture<MainMarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainMarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
