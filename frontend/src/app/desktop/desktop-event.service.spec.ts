import { TestBed } from '@angular/core/testing';

import { DesktopEventService } from './desktop-event.service';

describe('DesktopEventService', () => {
  let service: DesktopEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesktopEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
