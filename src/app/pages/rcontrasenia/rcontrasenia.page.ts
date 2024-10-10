import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { AuntentificarContraService } from 'src/app/services/auntentificar-contra.service';

@Component({
  selector: 'app-rcontrasenia',
  templateUrl: './rcontrasenia.page.html',
  styleUrls: ['./rcontrasenia.page.scss'],
})
export class RcontraseniaPage implements OnInit {
  correo: string = "";

  constructor(
    private menu: MenuController,
    private alertController: AlertController,
    private aunt: AuntentificarContraService // Inyectar el servicio
  ) {}

  ngOnInit() {
    this.menu.enable(false);
  }

  async enviarCorreo() {
    if (this.correo === "") {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Debe ingresar un correo',
        buttons: ['OK'],
        cssClass: 'estilo-alertas'
      });
      await alert.present();
    } else {
      this.aunt.recoverPassword(this.correo).subscribe({
        next: async () => {
          const alert = await this.alertController.create({
            header: 'Solicitud enviada',
            message: 'Se envió el link de recuperar contraseña al correo',
            buttons: ['OK'],
            cssClass: 'estilo-alertas'
          });
          await alert.present();
        },
        error: async (error) => {
          const alert = await this.alertController.create({
            header: 'Error',
            message: No se pudo enviar el correo: ${error},
            buttons: ['OK'],
            cssClass: 'estilo-alertas'
          });
          await alert.present();
        }
      });
    }
  }
}