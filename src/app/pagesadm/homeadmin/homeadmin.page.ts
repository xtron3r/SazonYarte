import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ServicioBDService } from 'src/app/services/servicio-bd.service';

@Component({
  selector: 'app-homeadmin',
  templateUrl: './homeadmin.page.html',
  styleUrls: ['./homeadmin.page.scss'],
})
export class HomeadminPage implements OnInit {

  constructor(private menu: MenuController, private bd: ServicioBDService, private storage: Storage, private router: Router) { 
  }

  async ngOnInit() {
    this.menu.enable(false);
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

}
