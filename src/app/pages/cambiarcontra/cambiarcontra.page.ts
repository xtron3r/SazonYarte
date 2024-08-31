import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-cambiarcontra',
  templateUrl: './cambiarcontra.page.html',
  styleUrls: ['./cambiarcontra.page.scss'],
})
export class CambiarcontraPage implements OnInit {

  contraAntigua: string = "sazon123";
  validarContraAntigua: string = "";
  nuevaContra: string = "";
  confirmContra: string = "";

  constructor(private menu:MenuController,private router: Router,private alertController: AlertController) {

  }

  ngOnInit() {
    this.menu.enable(false);
  }

  async irPerfil(){

      // Validacion contraseña terminada
      
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
          header: 'La contraseña no coincide con la actual',
          message: 'Por favor intente de nuevo.',
          buttons: ['OK'],
          cssClass: 'estilo-alertas'
        });
      await alert.present();
    } else if (this.nuevaContra != this.confirmContra){
        const alert = await this.alertController.create({
          header: 'Las contraseñas no coinciden',
          message: 'Por favor intente de nuevo.',
          buttons: ['OK'],
          cssClass: 'estilo-alertas'
        });
      await alert.present();
    } else if (this.nuevaContra == this.contraAntigua){
      const alert = await this.alertController.create({
        header: 'La contraseña no puede ser igual a la actual',
        message: 'Por favor intente de nuevo.',
        buttons: ['OK'],
        cssClass: 'estilo-alertas'
      });
      await alert.present();
    } else{ 
      this.router.navigate(['/miperfil']);
    }
   
  }
}
