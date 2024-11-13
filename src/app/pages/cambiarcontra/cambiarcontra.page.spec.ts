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

  it('Validacion de campos vacios en cambiar contraseña',  () => {
    // Configurar valores vacíos para los campos de contraseña
    component.contraAntigua = '';
    component.validarContraAntigua = '';
    component.nuevaContra = '';
    component.confirmContra = '';

    // Espía en el método create del AlertController
    spyOn(alertController, 'create').and.callThrough();

    // Ejecuta el método de cambio de contraseña
     component.irPerfil();

    // Verificar que se llame la alerta 
    expect(alertController.create).toHaveBeenCalled();
  });
});
