import { TestBed } from '@angular/core/testing';

import { GeneralService } from './servicio-general.service';

describe('ServicioGeneralService', () => {
  let service: GeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
