import { TestBed } from '@angular/core/testing';

import { PlatformInformationService } from './platform-information.service';

describe('PlatformInformationService', () => {
  let service: PlatformInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatformInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
