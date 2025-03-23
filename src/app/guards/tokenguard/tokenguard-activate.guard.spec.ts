import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { tokenguardActivateGuard } from './tokenguard-activate.guard';

describe('tokenguardActivateGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => tokenguardActivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
