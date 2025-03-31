import { TestBed } from '@angular/core/testing';

import { ExpiredtokenService } from './expiredtoken.service';

describe('ExpiredtokenService', () => {
  let service: ExpiredtokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpiredtokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
