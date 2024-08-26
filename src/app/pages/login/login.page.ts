import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  contrasenia: string = "";
  nombre: string = "";

  constructor(private router: Router) { }

  ngOnInit() {}

  irPagina() {
    //crear mi variable de contexto
    let navigationextras: NavigationExtras = {
      state: {
        nom: this.nombre,
        com: this.contrasenia
      }
    };
    this.router.navigate(['/home'], navigationextras);
  }
}
