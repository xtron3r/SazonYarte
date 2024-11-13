import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactoPage } from './contacto.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';

describe('ContactoPage', () => {
  let component: ContactoPage;
  let fixture: ComponentFixture<ContactoPage>;
  let alertController: AlertController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactoPage],
      imports: [IonicModule.forRoot(), FormsModule],
      providers: [SQLite, NativeStorage, AlertController]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactoPage);
    component = fixture.componentInstance;
    alertController = TestBed.inject(AlertController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show error message if a field is empty in the contact form', () => {
    // Configurar valores vacíos para los campos
    component.nombre = 'Juan perez';
    component.telefono = '123456789';
    component.mensaje = '';
    component.correo = 'juan@gmail.com';

    // Espía en el método create del AlertController
    spyOn(alertController, 'create').and.callThrough();
    // Ejecuta el método de envío del formulario
     component.enviarFormulario();
    // Verificar que se haya llamado a alertController.create
    expect(alertController.create).toHaveBeenCalled();
  });
});
