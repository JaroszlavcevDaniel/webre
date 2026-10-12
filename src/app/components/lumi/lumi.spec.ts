import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lumi } from './lumi';

describe('Lumi', () => {
  let component: Lumi;
  let fixture: ComponentFixture<Lumi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lumi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lumi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
