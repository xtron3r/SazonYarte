import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.page.html',
  styleUrls: ['./miperfil.page.scss'],
})
export class MiperfilPage implements OnInit {
  
  nombre: string = "";
  contrasenia: string = "";

  constructor(private menu:MenuController) { }

  ngOnInit() {
    this.menu.enable(false);
  }

}
