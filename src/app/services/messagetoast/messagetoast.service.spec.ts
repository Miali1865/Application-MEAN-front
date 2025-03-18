import { TestBed } from '@angular/core/testing';

import { MessagetoastService } from './messagetoast.service';

describe('MessagetoastService', () => {
  let service: MessagetoastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagetoastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
