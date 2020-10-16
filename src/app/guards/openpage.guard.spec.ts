import { TestBed } from '@angular/core/testing';

import { OpenpageGuard } from './openpage.guard';

describe('OpenpageGuard', () => {
  let guard: OpenpageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OpenpageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
