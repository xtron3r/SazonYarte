import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  usuario: string = "";
  contrasenia: string = "";

  constructor(private router: Router, private activedrouter: ActivatedRoute, private menu:MenuController) { 
    // Subscribirnos a la lectura de los parametros
    this.activedrouter.queryParams.subscribe(param =>{
      //valido si viene o no informacion en la ruta
      if(this.router.getCurrentNavigation()?.extras.state){
        this.usuario = this.router.getCurrentNavigation()?.extras?.state?.['usu'];
        this.contrasenia = this.router.getCurrentNavigation()?.extras?.state?.['con'];
      }
    }) 
  }

  ngOnInit() {
    this.menu.enable(true);
  }

  /*Antes de cargar la pagina, activa el menu*/
  ionViewWillEnter() {
    this.menu.enable(true);
  }
}
