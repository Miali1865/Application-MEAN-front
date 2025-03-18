import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { tokenguardChildGuard } from './tokenguard-child.guard';

describe('tokenguardGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => tokenguardChildGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
