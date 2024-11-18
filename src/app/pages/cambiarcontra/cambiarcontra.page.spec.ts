import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CambiarcontraPage } from './cambiarcontra.page';
import { IonicModule, AlertController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

describe('CambiarcontraPage', () => {
  let component: CambiarcontraPage;
  let fixture: ComponentFixture<CambiarcontraPage>;
  let alertController: AlertController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CambiarcontraPage],
      imports: [
        IonicModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        RouterModule.forRoot([]),
      ],
      providers: [SQLite, AlertController],
    }).compileComponents();

    fixture = TestBed.createComponent(CambiarcontraPage);
    component = fixture.componentInstance;
    alertController = TestBed.inject(AlertController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Contrasenia antigua no coincide',  () => {
    component.contraAntigua = 'Hola123';
    component.validarContraAntigua = 'Incorrecta';

    const resultado = component.contraAntigua === component.validarContraAntigua;
    
    expect(resultado).toBeFalsy();
  });

  it('si la nueva contraseña no coinciden',  () => {
    component.nuevaContra = 'Nueva123';
    component.confirmContra = 'Otra123';

    const resultado = component.nuevaContra === component.confirmContra;

    expect(resultado).toBeFalsy();
  });
});
