import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
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

  constructor(private menu: MenuController, private bd: ServicioBDService,  private authFireBase: AuthfireBaseService, private storage: Storage, private router: Router) { }

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

    const id_usuario = await this.storage.getItem('usuario');

    // Verifica si el usuario sigue existiendo en la base de datos
    if (id_usuario) {
      // Verifica si el usuario sigue existiendo en la base de datos
      const existe = await this.bd.verificarUsuario(id_usuario);
  
      if (!existe) {
        // Cierra sesión y redirige a la página de inicio de sesión
        await this.storage.removeItem('usuario');
        this.router.navigate(['/login']);
      }
    } else {
      // Si id_usuario es nulo, redirige al inicio de sesión
      this.router.navigate(['/login']);
    }
  }

  eliminarUsuario(usuario: any){
    this.authFireBase.eliminarUsuario(usuario.id_usuario)
    this.bd.eliminarUsuario(usuario.id_usuario);
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

    if (usuario.id_rol_fk == "Usuario"){
      this.bd.cambiarRolUsu(usuario.id_usuario, "1");
    } else{
      this.bd.cambiarRolUsu(usuario.id_usuario, "2");
    }
    
  }
}
