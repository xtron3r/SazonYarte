import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RcontraseniaPage } from './rcontrasenia.page';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from'src/environments/environment';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('RcontraseniaPage', () => {
  let component: RcontraseniaPage;
  let fixture: ComponentFixture<RcontraseniaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RcontraseniaPage],
      imports: [IonicModule.forRoot(),RouterModule.forRoot([]),AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireAuthModule,HttpClientModule,FormsModule],
      providers: [SQLite]
    }).compileComponents();

    fixture = TestBed.createComponent(RcontraseniaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Validar correro', () => {
    component.correo = 'prueba@gmail.com';
    expect(component.enviarCorreo()).toBeTruthy();
  }
)
});
