import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterPage } from './register.page';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HttpClientModule } from '@angular/common/http';
import { environment } from'src/environments/environment';
import { FormsModule } from '@angular/forms';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterPage],
      imports: [IonicModule.forRoot(),RouterModule.forRoot([]),AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireAuthModule,HttpClientModule, FormsModule],
      providers: [SQLite]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


   // PRUEBAS UNITARIAS 
 /* it('Validacion Campo Vacio', () => {
    component.nombreyApellido = "Esteban Toledo";
    component.usuario = "Xtroner";
    component.rut = "123456789";
    component.contrasenia = "123456";
    component.telefono = "987654321";
    component.correo = "admin@duocuc.cl";

    component.IrLogin();

    expect(component.nombreyApellido).toEqual("Esteban Toledo");
  });  

it ('Validacion Largo de contraseña', () => {
  component.contrasenia = "Hola12";
  component.IrLogin();
  expect(component.contrasenia.length).toBeLessThanOrEqual(6);
  
}) */

});
