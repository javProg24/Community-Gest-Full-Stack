import { TestBed } from '@angular/core/testing';

import { HerramientaService } from './herramienta.service';

describe('HerramientaService', () => {
  let service: HerramientaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HerramientaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
