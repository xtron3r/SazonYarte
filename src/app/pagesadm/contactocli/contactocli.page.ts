import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-contactocli',
  templateUrl: './contactocli.page.html',
  styleUrls: ['./contactocli.page.scss'],
})
export class ContactocliPage implements OnInit {

  contactos: any = [
    {
      id: 1,
      nombreyApellido: "Daryen Fernandez",
      telefono: "1234567890",
      correo: "da.fernandez@duocuc.cl",
      mensaje: "Necesito cambiar mi reserva y no se cómo hacerlo."
    },
    {
      id: 2,
      nombreyApellido: "Esteban Toledo",
      telefono: "1234567890",
      correo: "este.toledo@duocuc.cl",
      mensaje: "Necesito ayuda para reservar"
    },
    {
      id: 3,
      nombreyApellido: "Andy Madrid",
      telefono: "1234567890",
      correo: "a.madrid@duocuc.cl",
      mensaje: "Estoy probando la app se ve buenisima!"
    }
  ];
  constructor(private menu:MenuController) { }

  ngOnInit() {
    this.menu.enable(false);
  }

}
