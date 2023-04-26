import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterInvoiceComponent } from './water-invoice.component';

describe('WaterInvoiceComponent', () => {
  let component: WaterInvoiceComponent;
  let fixture: ComponentFixture<WaterInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterInvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
