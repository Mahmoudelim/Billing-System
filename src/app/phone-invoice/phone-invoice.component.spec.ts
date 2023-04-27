import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneInvoiceComponent } from './phone-invoice.component';

describe('PhoneInvoiceComponent', () => {
  let component: PhoneInvoiceComponent;
  let fixture: ComponentFixture<PhoneInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneInvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
