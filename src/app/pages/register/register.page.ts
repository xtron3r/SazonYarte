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

  async insertar() {
    this.bd.insertarUsuario(
      this.rut,
      this.usuario,
      this.nombreyApellido,
      this.contrasenia,
      this.telefono,
      this.correo,
      '',
      Number(this.id_rol)
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
        cssClass: 'estilo-alertas'
      });
      await alert.present();
    } else if (validaMayuscula.test(this.contrasenia) == false) {
      const alert = await this.alertController.create({
        header: 'Error en contraseña',
        message: 'La contraseña debe tener al menos una mayúscula',
        buttons: ['OK'],
        cssClass: 'estilo-alertas'
      });
      await alert.present();
    } else if (this.contrasenia != this.nuevaContrasenia) {
      const alert = await this.alertController.create({
        header: 'Error en contraseña',
        message: 'Las contraseñas no coinciden',
        buttons: ['OK'],
        cssClass: 'estilo-alertas'
      });
      await alert.present();
    } else if (this.nuevaContrasenia.length < 6 || this.contrasenia.length < 6) {
      const alert = await this.alertController.create({
        header: 'Error en contraseña',
        message: 'La contraseña debe tener al menos 6 caracteres',
        buttons: ['OK'],
        cssClass: 'estilo-alertas'
      });
      await alert.present();
    } else {
      try {
        // Utilizamos 
        const usuarioExiste = await this.bd.verificarUsuario(this.usuario);
  
        if (usuarioExiste) {
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'El nombre de usuario ya existe',
            buttons: ['OK'],
            cssClass: 'estilo-alertas'
          });
          await alert.present();
        } else {
          // Si no existe, registramos al usuario en Firebase
          await this.authService.registro(this.correo, this.contrasenia);
  
          // Luego insertamos al usuario en SQLite
          await this.insertar();
  
          const alert = await this.alertController.create({
            header: 'Registrado',
            message: 'Registrado correctamente',
            buttons: ['OK'],
            cssClass: 'estilo-alertas'
          });
          await alert.present();
  
          this.router.navigate(['/login']);
        }
      } catch (error: any) {
        // Manejar el error de Firebase si el correo ya está registrado
        if (error.code === 'auth/email-already-in-use') {
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'El correo ya está registrado',
            buttons: ['OK'],
            cssClass: 'estilo-alertas'
          });
          await alert.present();
        } else {
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'Error al registrar. Inténtelo de nuevo',
            buttons: ['OK'],
            cssClass: 'estilo-alertas'
          });
          await alert.present();
        }
      }
    }
  }
} 
