import { TestBed } from '@angular/core/testing';

import { AuthfireBaseService } from './authfire-base.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { HttpClientModule } from '@angular/common/http';

describe('AuthfireBaseService', () => {
  let service: AuthfireBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,HttpClientModule
      ],
      providers: [AuthfireBaseService,SQLite]
    });
    service = TestBed.inject(AuthfireBaseService);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
