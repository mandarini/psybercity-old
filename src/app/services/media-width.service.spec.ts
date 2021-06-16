import { TestBed } from '@angular/core/testing';

import { MediaWidthService } from './media-width.service';

describe('MediaWidthService', () => {
  let service: MediaWidthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaWidthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
