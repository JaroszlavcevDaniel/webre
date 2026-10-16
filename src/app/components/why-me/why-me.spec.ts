import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyMe } from './why-me';

describe('WhyMe', () => {
  let component: WhyMe;
  let fixture: ComponentFixture<WhyMe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhyMe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyMe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
