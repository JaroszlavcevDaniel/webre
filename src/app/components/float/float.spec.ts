import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Float } from './float';

describe('Float', () => {
  let component: Float;
  let fixture: ComponentFixture<Float>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Float]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Float);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
