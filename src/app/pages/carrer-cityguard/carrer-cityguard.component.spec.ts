import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrerCityguardComponent } from './carrer-cityguard.component';

describe('CarrerCityguardComponent', () => {
  let component: CarrerCityguardComponent;
  let fixture: ComponentFixture<CarrerCityguardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrerCityguardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrerCityguardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
