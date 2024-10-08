import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { AlertController, MenuController } from '@ionic/angular';
import { ServicioBDService } from 'src/app/services/servicio-bd.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  contrasenia: string = "";
  usuario: string = "";

  constructor(private router:Router, private menu:MenuController,private alertController: AlertController,private storage: NativeStorage, private bd: ServicioBDService ) {}

  ngOnInit() {
    this.menu.enable(false);
  }

  async irPagina() {

    if (this.usuario == "" || this.contrasenia == ""){
      const alert = await this.alertController.create({
        header: 'Campos Vacios',
        message: 'Por favor intente de nuevo',
        buttons: ['OK'],
        cssClass: 'estilo-alertas'
      });
      await alert.present();
    } else{
      
      let ValidarUsuario = await this.bd.IniciarSesion(this.usuario, this.contrasenia);

      if (ValidarUsuario) {
        // Guardar los datos del usuario en el NativeStorage
        this.storage.setItem('usuario',ValidarUsuario.id_usuario);
        
        this.router.navigate(['/home']);
        
      }
      else {
      const alert = await this.alertController.create({
        header: 'Error al iniciar Sesion',
        message: 'Usuario o Contraseña incorrecta',
        buttons: ['OK'],
        cssClass: 'estilo-alertas'
      });
      await alert.present();
      }
    
    }
  
    if (this.usuario == "admin" || this.contrasenia == "admin"){
      this.router.navigate(['/homeadmin']);
    }
  }
}
