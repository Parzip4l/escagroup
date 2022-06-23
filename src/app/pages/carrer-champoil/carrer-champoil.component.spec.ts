import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrerChampoilComponent } from './carrer-champoil.component';

describe('CarrerChampoilComponent', () => {
  let component: CarrerChampoilComponent;
  let fixture: ComponentFixture<CarrerChampoilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrerChampoilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrerChampoilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
