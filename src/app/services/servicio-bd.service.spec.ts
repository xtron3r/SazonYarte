import { TestBed } from '@angular/core/testing';

import { ServicioBDService } from './servicio-bd.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('ServicioBDService', () => {
  let service: ServicioBDService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SQLite]
    });
    service = TestBed.inject(ServicioBDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
