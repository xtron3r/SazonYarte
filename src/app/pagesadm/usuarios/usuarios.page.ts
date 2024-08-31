import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  
  usuarios: any = [
    { id: 1, nombreyApellido: "Daryen Fernandez", rut: "214587695" ,nombreUsuario: "H4ckerUrbano", correo: "da.fernandez@duocuc.cl", telefono: "1234567890"},
    { id: 2, nombreyApellido: "Esteban Toledo", rut: "217167194" ,nombreUsuario: "Estetoledo", correo: "este.toledo@duocuc.cl", telefono: "1234567890"},
    { id: 3, nombreyApellido: "Andy Madrid", rut: "214547740" ,nombreUsuario: "Papelucho", correo: "a.madrid@duocuc.cl", telefono: "1234567890"},
   
  ]
  constructor(private menu: MenuController, private router: Router, private activedrouter: ActivatedRoute) { }

  ngOnInit() {
    this.menu.enable(false);

   
    this.activedrouter.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        
        this.usuarios[0].nombreyApellido = this.router.getCurrentNavigation()?.extras?.state?.['nom'];
        this.usuarios[0].nombreUsuario = this.router.getCurrentNavigation()?.extras?.state?.['us'];
        this.usuarios[0].rut = this.router.getCurrentNavigation()?.extras?.state?.['run'];
        this.usuarios[0].correo = this.router.getCurrentNavigation()?.extras?.state?.['cor'];
        this.usuarios[0].telefono = this.router.getCurrentNavigation()?.extras?.state?.['te'];
      }
    });
  }
}