import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage implements OnInit {
  nombre: string = 'Nombre Predefinido';
  usuario: string = 'Usuario Predefinido';
  telefono: string = '123-456-7890';
  correo: string = 'correo@ejemplo.com';
  router: any;
  constructor(private menu:MenuController,router: Router) { 
    
  }
 
  ngOnInit() {
    this.menu.enable(false);
  }
  irPerfil() {
    let navigationExtras: NavigationExtras = {
      state: {
        nom: this.nombre,
        us: this.usuario,
        te: this.telefono,
        cor: this.correo
      }
    };
    this.router.navigate(['/miperfil'], navigationExtras);
  }

}
