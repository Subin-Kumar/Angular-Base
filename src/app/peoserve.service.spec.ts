import { TestBed } from '@angular/core/testing';

import { PeoserveService } from './peoserve.service';

describe('PeoserveService', () => {
  let service: PeoserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeoserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
