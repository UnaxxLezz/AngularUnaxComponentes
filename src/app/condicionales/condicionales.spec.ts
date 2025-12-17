import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Condicionales } from './condicionales';

describe('Condicionales', () => {
  let component: Condicionales;
  let fixture: ComponentFixture<Condicionales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Condicionales]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Condicionales);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
