import { TestBed } from '@angular/core/testing';

import { AuntentificarContraService } from './auntentificar-contra.service';

describe('AuntentificarContraService', () => {
  let service: AuntentificarContraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuntentificarContraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
