import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { ServicioBDService } from 'src/app/services/servicio-bd.service';
import { AuthfireBaseService } from 'src/app/services/authfire-base.service';
import { Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

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
      id_rol_fk: '',
      id_estado_fk: '',
    },
  ];

  buscarRut: string = "";
  errorRut: boolean = false;
  id_usuarioR!: number;

  constructor(private menu: MenuController, private bd: ServicioBDService, private alertController: AlertController, private storage: NativeStorage) {
    this.storage.getItem('usuario').then(data=>{
      this.id_usuarioR = data;
    });
  }

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
      this.Alerta('Error', 'No se puede cambiar el SuperAdmin');
      return; 
    }

    if (usuario.id_estado_fk == "Activado"){
      this.bd.deshabilitarUsuario('1',usuario.id_usuario).then(res => {
        this.bd.DesactivarReservasPorUsuarioDesa(usuario.id_usuario);
      });
    }else{
      this.bd.deshabilitarUsuario('2',usuario.id_usuario)
    }
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
