import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.page.html',
  styleUrls: ['./miperfil.page.scss'],
})
export class MiperfilPage implements OnInit {


  nombre: string = '';
  contrasenia: string = '';

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.nombre = navigation.extras.state['nom'];
      this.contrasenia = navigation.extras.state['com'];
    }
  }

  ngOnInit() {}
}
