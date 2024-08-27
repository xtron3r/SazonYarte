import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  contrasenia: string = "";
  nombre: string = "";

  constructor(private router:Router, private menu:MenuController) { }

  ngOnInit() {
    this.menu.enable(false);
  }


  irPagina() {
    //crear mi variable de contexto
    let navigationextras: NavigationExtras = {
      state: {
        nom: this.nombre,
        com: this.contrasenia
      }
    };

    if(this.nombre == "admin"){
      this.router.navigate(['/admin'], navigationextras);
    }else{
      this.router.navigate(['/home'], navigationextras);
    }
 
  }
}
