import { TestBed } from '@angular/core/testing';

import { CommunivateService } from './communivate.service';

describe('CommunivateService', () => {
  let service: CommunivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
