import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrerArahComponent } from './carrer-arah.component';

describe('CarrerArahComponent', () => {
  let component: CarrerArahComponent;
  let fixture: ComponentFixture<CarrerArahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrerArahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrerArahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
