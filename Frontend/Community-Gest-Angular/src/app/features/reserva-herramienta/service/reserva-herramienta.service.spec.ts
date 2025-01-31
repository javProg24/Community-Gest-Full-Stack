import { TestBed } from '@angular/core/testing';

import { ReservaHerramientaService } from './reserva-herramienta.service';

describe('ReservaHerramientaService', () => {
  let service: ReservaHerramientaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservaHerramientaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
