import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrerUrbanicaComponent } from './carrer-urbanica.component';

describe('CarrerUrbanicaComponent', () => {
  let component: CarrerUrbanicaComponent;
  let fixture: ComponentFixture<CarrerUrbanicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrerUrbanicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrerUrbanicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
