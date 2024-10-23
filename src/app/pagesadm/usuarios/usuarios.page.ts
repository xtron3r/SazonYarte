import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { ServicioBDService } from 'src/app/services/servicio-bd.service';
import { AuthfireBaseService } from 'src/app/services/authfire-base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  usuario: any = [
    {
      id_usuario: '',
      rut: '',
      nombreUsuario: '',
      nombreCompleto: '',
      correo: '',
      telefono: '',
      id_rol_fk: ''
    },
  ];

  buscarRut: string = "";
  errorRut: boolean = false;

  constructor(private menu: MenuController, private bd: ServicioBDService,  private authFireBase: AuthfireBaseService, private alertController: AlertController) { }

  async ngOnInit() {
    this.menu.enable(false);

    this.bd.dbState().subscribe(data => {
      // validar si la base de datos está lista
      if (data) {
        // subscribir al observable de usuarios
        this.bd.fetchUsuario().subscribe(res => {
          this.usuario = res;
        });
      }
    });
  }

  eliminarUsuario(usuario: any){
    if (usuario.id_usuario == "1") {
      this.Alerta('Error', 'No se puede eliminar el SuperAdmin');
      return; 
    } 

    this.bd.BuscarCorreoUsuario(usuario.nombreUsuario).then(usuarioInfo => {
      if (usuarioInfo && usuarioInfo.correo && usuarioInfo.contrasenia) {
        const password = usuarioInfo.contrasenia; // Recupera la contraseña desde usuarioInfo
  
        // Iniciar sesión con el correo recuperado de la BD y la contraseña almacenada
        this.authFireBase.inicioSesion(usuario.nombreUsuario, password)
          .then(() => {
            // Proceder a eliminar el usuario en Firebase Authentication
            this.authFireBase.eliminarUsuario(usuarioInfo.id_usuario)
              .then(() => {               
                // Luego de eliminar de Firebase, eliminar de tu base de datos local
                this.bd.eliminarUsuario(usuarioInfo.id_usuario)
                  .then(() => {
                  })
                  .catch(error => {
                    this.Alerta('Error', 'Error al eliminar usuario de la base de datos: ' + error.message);
                  });
              })
              .catch(error => {
                this.Alerta('Error', 'Error al eliminar usuario en Firebase: ' + error.message);
              });
          })
          .catch(error => {
            this.Alerta('Error', 'No se pudo autenticar al usuario: ' + error.message);
          });
      } else {
        this.Alerta('Error', 'No se encontró el correo o la contraseña del usuario.');
      }
    }).catch(error => {
      this.Alerta('Error', 'Error al buscar el correo: ' + error.message);
    });
  }

  buscarUsuario(buscarRut: any){
    
    if (buscarRut == ""){
      this.bd.listarUsuario();
      this.errorRut = false;
    } else{
       // Buscar el usuario por Rut
       this.bd.buscarUsuario(buscarRut).then(() => {
        // Si no hay resultados activa el ngif
        if (this.usuario.length == 0) {
          this.errorRut = true;
        }
      });
    }
  }

  cambiarRol(usuario: any){
    if (usuario.id_usuario == "1") {
      this.Alerta('Error', 'No se puede cambiar el rol del SuperAdmin');
      return;
    }

    if (usuario.id_rol_fk == "Usuario"){
      this.bd.cambiarRolUsu(usuario.id_usuario, "1");
    } else{
      this.bd.cambiarRolUsu(usuario.id_usuario, "2");
    }
    
  }

  async Alerta(titulo:string, mensaje:string){
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK'],
      cssClass:'estilo-alertas'
    });
    await alert.present();
  }
}
