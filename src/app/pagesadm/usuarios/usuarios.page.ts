import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  
  usuarios: any = [
    { id: 1, nombreyApellido: "Daryen Fernandez", rut: "214587695" ,nombreUsuario: "H4ckerUrbano", correo: "da.fernandez@duocuc.cl", telefono: "123456789", contrasenia: "Alavida65"},
    { id: 2, nombreyApellido: "Esteban Toledo", rut: "217167194" ,nombreUsuario: "Estetoledo", correo: "este.toledo@duocuc.cl", telefono: "123456789", contrasenia: "Alavida65"},
    { id: 3, nombreyApellido: "Andy Madrid", rut: "214547740" ,nombreUsuario: "Papelucho", correo: "a.madrid@duocuc.cl", telefono: "123456789", contrasenia: "Alavida65"}
   
  ]
  constructor(private menu: MenuController, private router: Router, private activedrouter: ActivatedRoute) { 
    
    this.activedrouter.queryParams.subscribe(param => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        
        this.usuarios[0].nombreyApellido = this.router.getCurrentNavigation()?.extras?.state?.['nom'];
        this.usuarios[0].nombreUsuario = this.router.getCurrentNavigation()?.extras?.state?.['us'];
        this.usuarios[0].rut = this.router.getCurrentNavigation()?.extras?.state?.['run'];
        this.usuarios[0].correo = this.router.getCurrentNavigation()?.extras?.state?.['cor'];
        this.usuarios[0].telefono = this.router.getCurrentNavigation()?.extras?.state?.['te'];
        this.usuarios[0].contrasenia = this.router.getCurrentNavigation()?.extras?.state?.['con'];
      }
    });
  }

  ngOnInit() {
    this.menu.enable(false);
  }

  irEditarusuario(){

    // editamos solo el primero para el ejemplo

    let navigationExtras: NavigationExtras = {
      state: {
        nom: this.usuarios[0].nombreyApellido,
        run: this.usuarios[0].rut,
        us: this.usuarios[0].nombreUsuario,
        cor: this.usuarios[0].correo,
        te: this.usuarios[0].telefono,
        con: this.usuarios[0].contrasenia
      }
    };
    this.router.navigate(['/editarusuario'], navigationExtras);
  }
}