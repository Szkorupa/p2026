import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trapez } from './trapez';

describe('Trapez', () => {
  let component: Trapez;
  let fixture: ComponentFixture<Trapez>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Trapez]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Trapez);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
