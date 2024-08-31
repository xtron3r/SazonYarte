import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  contrasenia: string = "";
  usuario: string = "";

  constructor(private router:Router, private menu:MenuController,private alertController: AlertController) { }

  ngOnInit() {
    this.menu.enable(false);
  }


  irPagina() {
    //crear mi variable de contexto
    let navigationextras: NavigationExtras = {
      state: {
        nom: this.usuario,
        com: this.contrasenia
      }
    };
    





    if(this.usuario == "admin"){
      this.router.navigate(['/homeadmin'], navigationextras);
    }else{
      this.router.navigate(['/home'], navigationextras);
    }
 
  }
}
