import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProComponent } from './main-pro.component';

describe('MainProComponent', () => {
  let component: MainProComponent;
  let fixture: ComponentFixture<MainProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
