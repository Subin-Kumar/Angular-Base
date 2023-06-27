import { TestBed } from '@angular/core/testing';

import { ParenttGuard } from './parentt.guard';

describe('ParenttGuard', () => {
  let guard: ParenttGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ParenttGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
