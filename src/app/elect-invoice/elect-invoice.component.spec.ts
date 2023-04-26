import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectInvoiceComponent } from './elect-invoice.component';

describe('ElectInvoiceComponent', () => {
  let component: ElectInvoiceComponent;
  let fixture: ComponentFixture<ElectInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectInvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
