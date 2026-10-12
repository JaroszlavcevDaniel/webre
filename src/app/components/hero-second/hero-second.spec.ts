import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSecond } from './hero-second';

describe('HeroSecond', () => {
  let component: HeroSecond;
  let fixture: ComponentFixture<HeroSecond>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroSecond]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSecond);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
