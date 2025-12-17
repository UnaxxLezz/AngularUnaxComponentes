import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Misclientes } from './misclientes';

describe('Misclientes', () => {
  let component: Misclientes;
  let fixture: ComponentFixture<Misclientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Misclientes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Misclientes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
