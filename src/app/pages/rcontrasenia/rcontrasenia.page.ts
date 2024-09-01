import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-rcontrasenia',
  templateUrl: './rcontrasenia.page.html',
  styleUrls: ['./rcontrasenia.page.scss'],
})
export class RcontraseniaPage implements OnInit {

  correo: string = "";

  constructor(private menu:MenuController, private alertController: AlertController) { }

  ngOnInit() {
    this.menu.enable(false);
  }

  async enviarCorreo() {
    const alert = await this.alertController.create({
      header: 'Solicitud enviada',
      message: 'Se envio el link de recuperar contraseña al correo',
      buttons: ['OK'],
      cssClass: 'estilo-alertas'
    });
    await alert.present();
  }


}
