import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Romb } from './romb';

describe('Romb', () => {
  let component: Romb;
  let fixture: ComponentFixture<Romb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Romb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Romb);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
