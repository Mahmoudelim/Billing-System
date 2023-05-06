import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterPaymentComponent } from './water-payment.component';

describe('WaterPaymentComponent', () => {
  let component: WaterPaymentComponent;
  let fixture: ComponentFixture<WaterPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
