import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-misreservas',
  templateUrl: './misreservas.page.html',
  styleUrls: ['./misreservas.page.scss'],
})
export class MisreservasPage implements OnInit {

  reservaConfirmada = false;
  mesaReservada: string = '';
  diaReserva: string = '';
  ubicacionReserva: string = '';

  constructor(private router: Router, private activedrouter: ActivatedRoute, private menu: MenuController,private alertController: AlertController) { 
    this.activedrouter.queryParams.subscribe(param => {
      if(this.router.getCurrentNavigation()?.extras.state){
        const state = this.router.getCurrentNavigation()?.extras.state;
        this.mesaReservada = `Mesa ${state?.['mesa']?.numero}`;
        this.diaReserva = state?.['fecha'];
        this.ubicacionReserva = state?.['ubicacion'];
        this.reservaConfirmada = true;
      }
    });
  }

  ngOnInit() {
    this.menu.enable(false);
  }

  cancelarReserva() {
    this.reservaConfirmada = false;
    this.mesaReservada = '';
    this.diaReserva = '';
    this.ubicacionReserva = '';

    this.alertController.create({
      header: 'Reserva Cancelada',
      message: 'Tu reserva ha sido cancelada.',
      buttons: ['OK'],
    }).then(alert => alert.present());
  }
}
