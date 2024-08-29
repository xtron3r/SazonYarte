import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

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

  constructor(private router: Router, private alertController: AlertController, private menu:MenuController) {}

  ngOnInit() {
    this.menu.enable(false);
    const estadomesa = this.router.getCurrentNavigation()?.extras.state;
    if (estadomesa) {
      this.mesaReservada = estadomesa['mesa'];
      this.diaReserva = estadomesa['fecha'];
      this.ubicacionReserva = estadomesa['ubicacion'];
      this.reservaConfirmada = true;
    }
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
