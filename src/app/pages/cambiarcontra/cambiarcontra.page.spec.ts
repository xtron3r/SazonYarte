import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CambiarcontraPage } from './cambiarcontra.page';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

describe('CambiarcontraPage', () => {
  let component: CambiarcontraPage;
  let fixture: ComponentFixture<CambiarcontraPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CambiarcontraPage],
      imports: [IonicModule.forRoot(),AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule, RouterModule.forRoot([])],
      providers: [SQLite]
    }).compileComponents();

    fixture = TestBed.createComponent(CambiarcontraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
