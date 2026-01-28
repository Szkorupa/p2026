import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trojkat } from './trojkat';

describe('Trojkat', () => {
  let component: Trojkat;
  let fixture: ComponentFixture<Trojkat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Trojkat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Trojkat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
