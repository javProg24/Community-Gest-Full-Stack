import { TestBed } from '@angular/core/testing';

import { InstalacionService } from './instalacion.service';

describe('InstalacionService', () => {
  let service: InstalacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstalacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
