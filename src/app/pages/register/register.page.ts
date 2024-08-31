import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  nombreyApellido: string ="";
  rut : string ="";
  usuario: string ="";
  contrasenia: string ="";
  telefono: string ="";
  correo: string ="";

  constructor(private menu:MenuController) { }

  ngOnInit() {
    this.menu.enable(false);
  }

}
