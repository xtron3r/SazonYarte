import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-cambiarcontra',
  templateUrl: './cambiarcontra.page.html',
  styleUrls: ['./cambiarcontra.page.scss'],
})
export class CambiarcontraPage implements OnInit {

  contraAntigua: string = "sazon123";
  validarContraAntigua: string = "";
  nuevaContra: string = "";
  confirmContra: string = "";

  constructor(private menu:MenuController,private router: Router) {

  }

  ngOnInit() {
    this.menu.enable(false);
  }

  irPerfil(){

    if(this.validarContraAntigua != this.contraAntigua){
      alert("Contraseña antigua no coincide.");
    } else if (this.nuevaContra != this.confirmContra){
      alert("Las contraseñas no coinciden.");
    }else{
      //crear mi variable de contexto
      let navigationExtras: NavigationExtras = {
        state: {
          con :this.nuevaContra
        }
      };
      this.router.navigate(['/miperfil'], navigationExtras);
      }
   
  }

  /*constructor(private menu:MenuController) { }

  ngOnInit() {
    this.menu.enable(false);
  }*/


}
