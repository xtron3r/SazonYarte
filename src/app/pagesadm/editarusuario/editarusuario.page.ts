import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-editarusuario',
  templateUrl: './editarusuario.page.html',
  styleUrls: ['./editarusuario.page.scss'],
})
export class EditarusuarioPage implements OnInit {
  nombre: string = "";
  nombreNuevo: string = "";
  usuario: string = "";
  usuarioNuevo: string = "";
  telefono: string = "";
  telefonoNuevo: string = "";
  correo: string = "";
  correoNuevo: string = "";
  rut: string = "";
  rutNuevo: string = "";

  constructor(private menu: MenuController, private router: Router, private activedrouter: ActivatedRoute, private alertController: AlertController) {
    
    this.activedrouter.queryParams.subscribe(param => {
    
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.nombre = this.router.getCurrentNavigation()?.extras?.state?.['nom'];
        this.usuario = this.router.getCurrentNavigation()?.extras?.state?.['us'];
        this.telefono = this.router.getCurrentNavigation()?.extras?.state?.['te'];
        this.correo = this.router.getCurrentNavigation()?.extras?.state?.['cor'];
        this.rut = this.router.getCurrentNavigation()?.extras?.state?.['run'];

        this.nombreNuevo = this.nombre;
        this.usuarioNuevo = this.usuario;
        this.telefonoNuevo = this.telefono;
        this.correoNuevo = this.correo;
        this.rutNuevo = this.rut;
      }
    });
  }

  ngOnInit() {
    this.menu.enable(false);
  }

  async irUsuarios() {
    if (this.nombreNuevo == "" || this.usuarioNuevo == "" || this.telefonoNuevo == "" || this.correoNuevo == "" || this.rutNuevo == "") {
      const alert = await this.alertController.create({
        header: 'Campos vacios',
        message: 'Por favor, inténtelo de nuevo',
        buttons: ['OK'],
        cssClass: 'estilo-alertas'
      });
      await alert.present();
    } else if (this.nombreNuevo == this.nombre && this.usuarioNuevo == this.usuario && this.telefonoNuevo == this.telefono && this.correoNuevo == this.correo && this.rutNuevo == this.rut) {
      const alert = await this.alertController.create({
        header: 'Los datos no pueden ser iguales a los anteriores',
        message: 'Por favor, intentelo de nuevo',
        buttons: ['OK'],
        cssClass: 'estilo-alertas'
      });
      await alert.present();
    } else {
      let navigationExtras: NavigationExtras = {
        state: {
          nom: this.nombreNuevo,
          run: this.rutNuevo,
          us: this.usuarioNuevo,
          cor: this.correoNuevo,
          te: this.telefonoNuevo
        }
      };
      this.router.navigate(['/usuarios'], navigationExtras);
    }
  }
}