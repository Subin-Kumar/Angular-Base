import { TestBed } from '@angular/core/testing';

import { ChiguardGuard } from './chiguard.guard';

describe('ChiguardGuard', () => {
  let guard: ChiguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChiguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
