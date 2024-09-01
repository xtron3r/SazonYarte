import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cambiarcontra',
  templateUrl: './cambiarcontra.page.html',
  styleUrls: ['./cambiarcontra.page.scss'],
})
export class CambiarcontraPage implements OnInit {

  contraAntigua: string = "Hola123";
  validarContraAntigua: string = "";
  nuevaContra: string = "";
  confirmContra: string = "";

  constructor(private menu:MenuController,private router: Router,private alertController: AlertController, private toastController: ToastController) {

  }

  ngOnInit() {
    this.menu.enable(false);
  }

  async irPerfil(){

    const validaMayuscula = /[A-Z]/; // Valida Mayusculas
      
    if (this.nuevaContra == "" || this.validarContraAntigua == "" || this.confirmContra == ""){
      const alert = await this.alertController.create({
        header: 'Campos Vacios',
        message: 'Por favor intente de nuevo.',
        buttons: ['OK'],
        cssClass: 'estilo-alertas'
      });
      await alert.present();
    } else if(this.contraAntigua != this.validarContraAntigua ){
        const alert = await this.alertController.create({
          header: 'Error en el cambio',
          message: 'La contraseña no coincide con la actual',
          buttons: ['OK'],
          cssClass: 'estilo-alertas'
        });
      await alert.present();
    } else if (this.nuevaContra != this.confirmContra){
        const alert = await this.alertController.create({
          header: 'Error en el cambio',
          message: 'Las contraseñas no coinciden',
          buttons: ['OK'],
          cssClass: 'estilo-alertas'
        });
      await alert.present();
    } else if (this.nuevaContra == this.contraAntigua){
      const alert = await this.alertController.create({
        header: 'Error en el cambio',
        message: 'La nueva contraseña es igual a la actual',
        buttons: ['OK'],
        cssClass: 'estilo-alertas'
      });
      await alert.present();
    } else if (validaMayuscula.test(this.nuevaContra) == false || validaMayuscula.test(this.confirmContra) == false){

      const alert = await this.alertController.create({
        header: 'Error en contraseña',
        message: 'La contraseña debe tener al menos una mayuscula',
        buttons: ['OK'],
        cssClass: 'estilo-alertas'
      });
      await alert.present(); 
    
    } else{ 
      this.MensajeRegistro('bottom');
      this.router.navigate(['/miperfil']);
    }
   
  }

  async MensajeRegistro(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Contraseña cambiada con exito !',
      duration: 2000,
      position: position,
      cssClass: 'estilo-alertas'
    });
    await toast.present();
  }
}
