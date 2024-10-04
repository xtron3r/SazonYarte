import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { ServicioBDService } from 'src/app/services/servicio-bd.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  nombreyApellido: string ='';
  rut : string ='';
  usuario: string ='';
  contrasenia: string ='';
  nuevaContrasenia: string ='';
  telefono: string ='';
  correo: string ='';
  id_rol: string='1';

  constructor(private menu:MenuController, private alertController: AlertController, private router: Router, private bd: ServicioBDService) { }

  ngOnInit() {
    this.menu.enable(false);
  }
  insertar(){
    this.bd.insertarUsuario(this.rut, this.usuario, this.nombreyApellido, this.contrasenia, this.telefono, this.correo, Number(this.id_rol));
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
    } else if (this.contrasenia != this.nuevaContrasenia){

      const alert = await this.alertController.create({
        header: 'Error en contraseña',
        message: 'Las contraseñas no coinciden',
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
      this.insertar();
      this.router.navigate(['/login'], navigationextras);
      
    }
    
  }
  


}
