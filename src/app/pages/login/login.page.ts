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


  async irPagina() {
    //crear mi variable de contexto
    let navigationextras: NavigationExtras = {
      state: {
        nom: this.usuario,
        com: this.contrasenia
      }
    };

    if (this.usuario == "" || this.contrasenia == ""){
      const alert = await this.alertController.create({
        header: 'Campos Vacios',
        message: 'Por favor intente de nuevo',
        buttons: ['OK'],
        cssClass: 'estilo-alertas'
      });
      await alert.present();
    } else{

      const validaMayuscula = this.contrasenia  != this.contrasenia.toLowerCase();

      if (validaMayuscula == false){
        const alert = await this.alertController.create({
          header: 'Contraseña Incorrecta',
          message: 'Intente de nuevo',
          buttons: ['OK'],
          cssClass: 'estilo-alertas'
        });
        await alert.present();
      } else {

        if(this.usuario == "admin"){
          this.router.navigate(['/homeadmin'], navigationextras);
        }else {
          this.router.navigate(['/home'], navigationextras);
        }
      }
    }
  }
}
