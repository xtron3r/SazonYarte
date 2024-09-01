import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  nombreyApellido: string ="";
  rut : string ="";
  usuario: string ="";
  contrasenia: string ="";
  telefono: string ="";
  correo: string ="";

  constructor(private menu:MenuController, private alertController: AlertController, private router: Router) { }

  ngOnInit() {
    this.menu.enable(false);
  }
  
  async IrLogin(){

    const validaMayuscula = /[A-Z]/;

    if (this.nombreyApellido == ""  || this.rut == "" || this.usuario == "" || this.contrasenia == "" || this.telefono == "" || this.correo == ""){
      
      const alert = await this.alertController.create({
        header: 'Campos Vacios',
        message: 'Por favor intente de nuevo',
        buttons: ['OK'],
        cssClass: 'estilo-alertas'
      });
      await alert.present();
    }
    else if (validaMayuscula.test(this.contrasenia) == false) {

      const alert = await this.alertController.create({
        header: 'Error en contraseña',
        message: 'La contraseña debe tener al menos una mayuscula',
        buttons: ['OK'],
        cssClass: 'estilo-alertas'
      });
      await alert.present();
    } else{
      
        // Creamos variable de contexto
      let navigationextras: NavigationExtras = {
        state: {
          usu: this.usuario,
          con: this.contrasenia
        }
      };
      const alert = await this.alertController.create({
        header: 'Registrado',
        message: 'Registrado Correctamente',
        buttons: ['OK'],
        cssClass: 'estilo-alertas'
      });
      await alert.present();

      this.router.navigate(['/login'], navigationextras);
    }
    
  }

}
