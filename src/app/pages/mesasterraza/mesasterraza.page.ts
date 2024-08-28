import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-mesasterraza',
  templateUrl: './mesasterraza.page.html',
  styleUrls: ['./mesasterraza.page.scss'],
})
export class MesasterrazaPage implements OnInit {

 
  T1Elegido = false;
  T2Elegido = false;
  T3Elegido = false;
  T4Elegido = false;
  T5Elegido = false;
  T6Elegido = false;
  T7Elegido = false;
  T8Elegido = false;
  T9Elegido = false;
  T10Elegido = false;
  T11Elegido = false;
  T12Elegido = false;
  T13Elegido = false;
  T14Elegido = false;
  T15Elegido = false;

  constructor(private menu: MenuController, private alertController: AlertController) { }

  ngOnInit() {
    this.menu.enable(false);
  }

  seleccionarAsiento(asiento: string) {
    if (asiento === 'L1') this.T1Elegido = !this.T1Elegido;
    if (asiento === 'L2') this.T2Elegido = !this.T2Elegido;
    if (asiento === 'L3') this.T3Elegido = !this.T3Elegido;
    if (asiento === 'L4') this.T4Elegido = !this.T4Elegido;
    if (asiento === 'L5') this.T5Elegido = !this.T5Elegido;
    if (asiento === 'L6') this.T6Elegido = !this.T6Elegido;
    if (asiento === 'L7') this.T7Elegido = !this.T7Elegido;
    if (asiento === 'L8') this.T8Elegido = !this.T8Elegido;
    if (asiento === 'L9') this.T9Elegido = !this.T9Elegido;
    if (asiento === 'L10') this.T10Elegido = !this.T10Elegido;
    if (asiento === 'L11') this.T11Elegido = !this.T11Elegido;
    if (asiento === 'L12') this.T12Elegido = !this.T12Elegido;
    if (asiento === 'L13') this.T13Elegido = !this.T13Elegido;
    if (asiento === 'L14') this.T14Elegido = !this.T14Elegido;
    if (asiento === 'L15') this.T15Elegido = !this.T15Elegido;
  }

  async confirmarSeleccion() {
    const asientoSeleccionado = [
      this.T1Elegido,
      this.T2Elegido,
      this.T3Elegido,
      this.T4Elegido,
      this.T5Elegido,
      this.T6Elegido,
      this.T7Elegido,
      this.T8Elegido,
      this.T9Elegido,
      this.T10Elegido,
      this.T11Elegido,
      this.T12Elegido,
      this.T13Elegido,
      this.T14Elegido,
      this.T15Elegido,
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


