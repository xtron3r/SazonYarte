import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  contraRegistro: string = "";
  usuarioRegistro: string = "";

  contrasenia: string = "";
  usuario: string = "";

  constructor(private router:Router, private menu:MenuController,private alertController: AlertController,private activedrouter: ActivatedRoute ) { 

    // Subscribirnos a la lectura de los parametros
    this.activedrouter.queryParams.subscribe(param =>{
      //valido si viene o no informacion en la ruta
      if(this.router.getCurrentNavigation()?.extras.state){
        this.usuarioRegistro = this.router.getCurrentNavigation()?.extras?.state?.['usu'];
        this.contraRegistro = this.router.getCurrentNavigation()?.extras?.state?.['con'];
      }
    }) 
  }

  ngOnInit() {
    this.menu.enable(false);
  }


  async irPagina() {

    if (this.usuario == "" || this.contrasenia == ""){
      const alert = await this.alertController.create({
        header: 'Campos Vacios',
        message: 'Por favor intente de nuevo',
        buttons: ['OK'],
        cssClass: 'estilo-alertas'
      });
      await alert.present();
    } else if (this.usuario == "admin" && this.contrasenia == "admin"){

      this.router.navigate(['/homeadmin']);

    } else if (this.usuario == this.usuarioRegistro && this.contrasenia == this.contraRegistro){

      let navigationExtras: NavigationExtras = {
        state: {
          'usu': this.usuarioRegistro,
          'con': this.contraRegistro
        }
      };
      this.router.navigate(['/home'], navigationExtras);

    } else {

      const alert = await this.alertController.create({
        header: 'Error al iniciar Sesion',
        message: 'Usuario o Contraseña incorrecta',
        buttons: ['OK'],
        cssClass: 'estilo-alertas'
      });
      await alert.present();
    }
  }
}
