import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-mesasterraza',
  templateUrl: './mesasterraza.page.html',
  styleUrls: ['./mesasterraza.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MesasterrazaPage implements OnInit {

  mesaSeleccionada: any = null;

  mesas : any = [
    {numero: 1, reservada: false },
    {numero: 2, reservada: false },
    {numero: 3, reservada: false },
    {numero: 4, reservada: false },
    {numero: 5, reservada: true },
    {numero: 6, reservada: false },
    {numero: 7, reservada: false },
    {numero: 8, reservada: false },
    {numero: 9, reservada: false },
    {numero: 10, reservada: false },
    {numero: 11, reservada: false },
    {numero: 12, reservada: false },
    {numero: 13, reservada: true },
    {numero: 14, reservada: false },
    {numero: 15, reservada: false },
  ]

  constructor(private menu: MenuController, private alertController: AlertController, private router: Router) { }

  ngOnInit() {
    this.menu.enable(false);
  }

  reservarMesa(mesa: any) {
    if (this.mesaSeleccionada == mesa) {
        mesa.reservada = false;
        this.mesaSeleccionada = null;

    }

    if (this.mesaSeleccionada !== null) {
        this.mesaSeleccionada.reservada = false;

    }

    mesa.reservada = true;
    this.mesaSeleccionada = mesa;
  
  }

  async confirmarReserva() {
    
    if (this.mesaSeleccionada != null) {


        this.router.navigate(['/home']);

    } else {
        const alert = await this.alertController.create({
            header: 'Advertencia',
            message: 'Por favor, seleccione una mesa antes de confirmar.',
            buttons: ['OK']
        });
        await alert.present();
    }
  }
}


