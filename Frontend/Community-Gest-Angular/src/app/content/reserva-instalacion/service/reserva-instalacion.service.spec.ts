import { TestBed } from '@angular/core/testing';

import { ReservaInstalacionService } from './reserva-instalacion.service';

describe('ReservaInstalacionService', () => {
  let service: ReservaInstalacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservaInstalacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
