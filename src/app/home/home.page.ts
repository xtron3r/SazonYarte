import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { MenuController } from '@ionic/angular';
import { ServicioBDService } from '../services/servicio-bd.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  id_usuario! : number;
  usuario : string = "";

  constructor(private menu:MenuController, private storage: NativeStorage, private bd: ServicioBDService) { 

  }

  ngOnInit() {
    this.menu.enable(true);
  }

  /*Antes de cargar la pagina, activa el menu*/
  ionViewWillEnter() {
    this.menu.enable(true);

    this.storage.getItem('usuario').then(data=>{
      this.id_usuario = data;

      // llama a la consulta solo cuando se haya obtenido el id
      return this.bd.miPerfil(this.id_usuario);

    }).then(data => {
      if (data) {
        this.usuario = data.nombreusuario;
      }
    });
  }
}
