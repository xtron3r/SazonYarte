import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-mesaslocal',
  templateUrl: './mesaslocal.page.html',
  styleUrls: ['./mesaslocal.page.scss'],
})
export class MesaslocalPage implements OnInit {

  L1Elegido = false;
  L2Elegido = false;
  L3Elegido = false;
  L4Elegido = false;
  L5Elegido = false;
  L6Elegido = false;
  L7Elegido = false;
  L8Elegido = false;
  L9Elegido = false;
  L10Elegido = false;
  L11Elegido = false;
  L12Elegido = false;
  L13Elegido = false;
  L14Elegido = false;
  L15Elegido = false;

  constructor(private menu: MenuController, private alertController: AlertController) { }

  ngOnInit() {
    this.menu.enable(false);
  }

  seleccionarAsiento(asiento: string) {
    if (asiento === 'L1') this.L1Elegido = !this.L1Elegido;
    if (asiento === 'L2') this.L2Elegido = !this.L2Elegido;
    if (asiento === 'L3') this.L3Elegido = !this.L3Elegido;
    if (asiento === 'L4') this.L4Elegido = !this.L4Elegido;
    if (asiento === 'L5') this.L5Elegido = !this.L5Elegido;
    if (asiento === 'L6') this.L6Elegido = !this.L6Elegido;
    if (asiento === 'L7') this.L7Elegido = !this.L7Elegido;
    if (asiento === 'L8') this.L8Elegido = !this.L8Elegido;
    if (asiento === 'L9') this.L9Elegido = !this.L9Elegido;
    if (asiento === 'L10') this.L10Elegido = !this.L10Elegido;
    if (asiento === 'L11') this.L11Elegido = !this.L11Elegido;
    if (asiento === 'L12') this.L12Elegido = !this.L12Elegido;
    if (asiento === 'L13') this.L13Elegido = !this.L13Elegido;
    if (asiento === 'L14') this.L14Elegido = !this.L14Elegido;
    if (asiento === 'L15') this.L15Elegido = !this.L15Elegido;
  }

  async confirmarSeleccion() {
    const asientoSeleccionado = [
      this.L1Elegido,
      this.L2Elegido,
      this.L3Elegido,
      this.L4Elegido,
      this.L5Elegido,
      this.L5Elegido,
      this.L7Elegido,
      this.L8Elegido,
      this.L9Elegido,
      this.L10Elegido,
      this.L11Elegido,
      this.L12Elegido,
      this.L13Elegido,
      this.L14Elegido,
      this.L15Elegido,
    ];

    if (asientoSeleccionado.every(Seleccionado => !Seleccionado)) {
      const alert = await this.alertController.create({
        header: 'No hay selección',
        message: 'Por favor, selecciona al menos una mesa.',
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Selección Confirmada',
        message: 'La(s) mesa(s) han sido seleccionadas.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}
