import { TestBed } from '@angular/core/testing';

import { FineTaxService } from './fine-tax.service';

describe('FineTaxService', () => {
  let service: FineTaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FineTaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
