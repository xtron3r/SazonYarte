import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.page.html',
  styleUrls: ['./miperfil.page.scss'],
})
export class MiperfilPage implements OnInit {

  nombre: string = "Basthian Bascuñan";
  usuario: string = "Asadomaster";
  telefono: string = "123456789";
  correo: string = "bas.cunan@duocuc.cl";
  contrasenia: string = "sazon123";

  constructor(private menu:MenuController,private router: Router,private activedrouter: ActivatedRoute) {
    
    // Subscribirnos a la lectura de los parametros
    this.activedrouter.queryParams.subscribe(param =>{
      //valido si viene o no informacion en la ruta
      if(this.router.getCurrentNavigation()?.extras.state){
        this.nombre = this.router.getCurrentNavigation()?.extras?.state?.['nom'];
        this.usuario =  this.router.getCurrentNavigation()?.extras?.state?.['us'];
        this.telefono = this.router.getCurrentNavigation()?.extras?.state?.['te'];
        this.correo = this.router.getCurrentNavigation()?.extras?.state?.['cor'];
      }
    }) 
  }

  ngOnInit() {
    this.menu.enable(false);
  }

  irEditarperfil(){
    let navigationExtras: NavigationExtras = {
      state: {
        nom: this.nombre,
        us: this.usuario,
        te: this.telefono,
        cor: this.correo
      }
    };
    this.router.navigate(['/editarperfil'], navigationExtras);
  }
}
