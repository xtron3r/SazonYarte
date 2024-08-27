import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.page.html',
  styleUrls: ['./miperfil.page.scss'],
})
export class MiperfilPage implements OnInit {

  nombre: string = 'Basthian';
  usuario: string = 'user';
  telefono: string = '123-456-7890';
  correo: string = 'correo@ejemplo.com';

  constructor(private menu:MenuController,private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.nombre = navigation.extras.state['nom'] || this.nombre;
      this.usuario = navigation.extras.state['us'] || this.usuario;
      this.telefono = navigation.extras.state['te'] || this.telefono;
      this.correo = navigation.extras.state['cor'] || this.correo;
    }
  }

  ngOnInit() {
    this.menu.enable(false);
  }

}
