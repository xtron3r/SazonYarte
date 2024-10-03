import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ServicioBDService } from 'src/app/services/servicio-bd.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  usuarios: any = [
    {
      id_usuario: '',
      rut: '',
      nombreUsuario: '',
      nombreyApellido: '',
      correo: '',
      telefono: ''
    },
  ];

  constructor(private menu: MenuController, private bd: ServicioBDService,private router: Router, private activedrouter: ActivatedRoute) { }

  ngOnInit() {
    this.menu.enable(false);

    this.bd.dbState().subscribe(data => {
      // validar si la base de datos está lista
      if (data) {
        // subscribir al observable de usuarios
        this.bd.fetchUsuario().subscribe(res => {
          this.usuarios = res;
        });
      }
    });
  }
  
}
