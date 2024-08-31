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
  rutnuevo: string = "";

  constructor(private menu: MenuController, private router: Router, private activedrouter: ActivatedRoute, private alertController: AlertController) {
    // Subscribirnos a la lectura de los parametros
    this.activedrouter.queryParams.subscribe(param => {
      // Valido si viene o no informacion en la ruta
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.nombre = this.router.getCurrentNavigation()?.extras?.state?.['nom'];
        this.usuario = this.router.getCurrentNavigation()?.extras?.state?.['us'];
        this.telefono = this.router.getCurrentNavigation()?.extras?.state?.['te'];
        this.correo = this.router.getCurrentNavigation()?.extras?.state?.['cor'];
        this.rut = this.router.getCurrentNavigation()?.extras?.state?.['run'];

        // Asignar los valores recibidos a las variables "nuevas"
        this.nombreNuevo = this.nombre;
        this.usuarioNuevo = this.usuario;
        this.telefonoNuevo = this.telefono;
        this.correoNuevo = this.correo;
        this.rutnuevo = this.rut;
      }
    });
  }

  ngOnInit() {
    this.menu.enable(false);
  }

  async irUsuarios() {
    if (this.nombreNuevo === "" || this.usuarioNuevo === "" || this.telefonoNuevo === "" || this.correoNuevo === "" || this.rutnuevo === "") {
      const alert = await this.alertController.create({
        header: 'Campos vacíos',
        message: 'Por favor, inténtelo de nuevo',
        buttons: ['OK'],
      });
      await alert.present();
    } else if (this.nombreNuevo === this.nombre && this.usuarioNuevo === this.usuario && this.telefonoNuevo === this.telefono && this.correoNuevo === this.correo && this.rutnuevo === this.rut) {
      const alert = await this.alertController.create({
        header: 'Los datos no pueden ser iguales a los anteriores',
        message: 'Por favor, inténtelo de nuevo',
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      let navigationExtras: NavigationExtras = {
        state: {
          nom: this.nombreNuevo,
          run: this.rutnuevo,
          us: this.usuarioNuevo,
          cor: this.correoNuevo,
          te: this.telefonoNuevo
        }
      };
      this.router.navigate(['/usuarios'], navigationExtras);
    }
  }
}