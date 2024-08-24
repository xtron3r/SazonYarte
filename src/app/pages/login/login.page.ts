import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  contrasenia:string = "Lo espejo";
  edad: number = 30;
  nombre: string = "Julian";
  arregloPersona: any = [
    {
      nombre: 'José',
      apellido: 'Muñoz',
      edad: 24
    },
    {
      nombre: 'Maria',
      apellido: 'Rodriguez',
      edad: 25
    },
    {
      nombre: 'Alma',
      apellido: 'Cara',
      edad: 19
    }

  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }


  irPagina(){
    //crear mi variable de contexto

    let navigationextras: NavigationExtras = {
      state: {
        com: this.contrasenia,
        ed: this.edad,
        nom: this.nombre
      }

    }


    //crear el codigo dque quiera de la logica
    this.router.navigate(['/home'], navigationextras);

  }

}
