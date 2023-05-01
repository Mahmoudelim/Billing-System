import { TestBed } from '@angular/core/testing';

import { SpserviceService } from './spservice.service';

describe('SpserviceService', () => {
  let service: SpserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
