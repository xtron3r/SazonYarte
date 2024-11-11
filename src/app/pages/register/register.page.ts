import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { ServicioBDService } from 'src/app/services/servicio-bd.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthfireBaseService } from 'src/app/services/authfire-base.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  nombreyApellido: string = '';
  rut: string = '';
  usuario: string = '';
  contrasenia: string = '';
  nuevaContrasenia: string = '';
  telefono: string = '';
  correo: string = '';
  id_rol: string = '2';
  id_estado_fk: string = '2';
  MensajeError!: string;

  constructor(
    private menu: MenuController,
    private alertController: AlertController,
    private router: Router,
    private bd: ServicioBDService,
    private afAuth: AngularFireAuth,
    private authService: AuthfireBaseService
  ) {}

  ngOnInit() {
    this.menu.enable(false);
  }

  insertar() {
    this.authService.registro(this.correo, this.contrasenia);
    this.bd.insertarUsuario(
      this.rut,
      this.usuario,
      this.nombreyApellido,
      this.contrasenia,
      this.telefono,
      this.correo,
      '',
      Number(this.id_rol),
      this.id_estado_fk
    );
  }

  async IrLogin() {
    const validaMayuscula = /[A-Z]/;

    if (
      this.nombreyApellido == '' ||
      this.rut == '' ||
      this.usuario == '' ||
      this.contrasenia == '' ||
      this.telefono == '' ||
      this.correo == ''
    ) {
      const alert = await this.alertController.create({
        header: 'Campos Vacíos',
        message: 'Por favor complete todos los campos',
        buttons: ['OK'],
        cssClass: 'estilo-alertas',
      });
      await alert.present();
    } else if (validaMayuscula.test(this.contrasenia) == false) {
      const alert = await this.alertController.create({
        header: 'Error en contraseña',
        message: 'La contraseña debe tener al menos una mayúscula',
        buttons: ['OK'],
        cssClass: 'estilo-alertas',
      });
      await alert.present();
    } else if (this.contrasenia != this.nuevaContrasenia) {
      const alert = await this.alertController.create({
        header: 'Error en contraseña',
        message: 'Las contraseñas no coinciden',
        buttons: ['OK'],
        cssClass: 'estilo-alertas',
      });
      await alert.present();
    } else if (this.nuevaContrasenia.length < 6 || this.contrasenia.length < 6) {
      const alert = await this.alertController.create({
        header: 'Error en contraseña',
        message: 'La contraseña debe tener al menos 6 caracteres',
        buttons: ['OK'],
        cssClass: 'estilo-alertas',
      });
      await alert.present();
    } else if (await this.bd.verificarUsuario(this.usuario)) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'El nombre de usuario ya existe',
        buttons: ['OK'],
        cssClass: 'estilo-alertas',
      });
      await alert.present();
    } else if (await this.bd.verificarCorreo(this.correo)) { // Validación de correo existente
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'El correo ya está registrado',
        buttons: ['OK'],
        cssClass: 'estilo-alertas',
      });
      await alert.present();
    } else {
      // Si todas las validaciones pasan, registrar en Firebase
      this.insertar();

      const alert = await this.alertController.create({
        header: 'Registrado',
        message: 'Registrado correctamente',
        buttons: ['OK'],
        cssClass: 'estilo-alertas',
      });
      await alert.present();

      // Redirigir al login
      this.router.navigate(['/login']);
    }
  }
}
