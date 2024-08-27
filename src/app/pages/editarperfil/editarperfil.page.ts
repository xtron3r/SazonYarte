import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage implements OnInit {
  nombre: string = "";
  nombreNuevo: string = "";
  usuario: string = "";
  usuarioNuevo: string = "";
  telefono: string = "";
  telefonoNuevo: string = "";
  correo: string = "";
  correoNuevo: string = "";

  constructor(private menu:MenuController,private router: Router,private activedrouter: ActivatedRoute, private alertController: AlertController) {
    
    // Subscribirnos a la lectura de los parametros
    this.activedrouter.queryParams.subscribe(param =>{

      //valido si viene o no informacion en la ruta
      if(this.router.getCurrentNavigation()?.extras.state){
        this.nombre = this.router.getCurrentNavigation()?.extras?.state?.['nom'];
        this.usuario =  this.router.getCurrentNavigation()?.extras?.state?.['us'];
        this.telefono = this.router.getCurrentNavigation()?.extras?.state?.['te'];
        this.correo = this.router.getCurrentNavigation()?.extras?.state?.['cor'];

        this.nombreNuevo = this.nombre;
        this.usuarioNuevo = this.usuario;
        this.telefonoNuevo = this.telefono;
        this.correoNuevo = this.correo;
      }
    }) 
  }
 
  ngOnInit() {
    this.menu.enable(false);
  }
  async irPerfil() {

    if (this.nombreNuevo =="" || this.usuarioNuevo =="" || this.telefonoNuevo =="" || this.correoNuevo ==""){
      const alert = await this.alertController.create({
        header: 'Campos vacios',
        message: 'Por Favor intentelo de nuevo',
        buttons: ['OK'],
      });
  
      await alert.present();
    } else if (this.nombreNuevo == this.nombre && this.usuarioNuevo == this.usuario && this.telefonoNuevo  ==  this.telefono && this.correoNuevo  ==  this.correo){
      const alert = await this.alertController.create({
        header: 'Los datos no pueden ser igual a los anteriores',
        message: 'Por favor intentelo de nuevo',
        buttons: ['OK'],
      });
      await alert.present();
    }
    else{
      let navigationExtras: NavigationExtras = {
        state: {
          nom: this.nombreNuevo,
          us: this.usuarioNuevo,
          te: this.telefonoNuevo,
          cor: this.correoNuevo
        }
      };
      this.router.navigate(['/miperfil'], navigationExtras);
    } 
  }

}

