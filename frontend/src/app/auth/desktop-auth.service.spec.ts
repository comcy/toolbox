import { TestBed } from '@angular/core/testing';

import { DesktopAuthService } from './desktop-auth.service';

describe('DesktopAuthService', () => {
  let service: DesktopAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesktopAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
