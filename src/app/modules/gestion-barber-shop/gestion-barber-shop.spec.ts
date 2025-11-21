import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionBarberShop } from './gestion-barber-shop';

describe('GestionBarberShop', () => {
  let component: GestionBarberShop;
  let fixture: ComponentFixture<GestionBarberShop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionBarberShop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionBarberShop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
