import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.page.html',
  styleUrls: ['./mesas.page.scss'],
})
export class MesasPage implements OnInit {

  mesasTerraza: any = [
    {numero: 1, reservada: false, disponible: "Habiitada"},
    {numero: 2, reservada: false, disponible: "Habiitada" },
    {numero: 3, reservada: false, disponible: "Habiitada" },
    {numero: 4, reservada: false, disponible: "Habiitada" },
    {numero: 5, reservada: true, disponible: "Habiitada" },
    {numero: 6, reservada: false, disponible: "Habiitada" },
    {numero: 7, reservada: false, disponible: "Habiitada" },
    {numero: 8, reservada: false, disponible: "Habiitada" },
    {numero: 9, reservada: false, disponible: "Habiitada" },
    {numero: 10, reservada: false, disponible: "Habiitada" },
    {numero: 11, reservada: false, disponible: "Habiitada" },
    {numero: 12, reservada: false, disponible: "Habiitada" },
    {numero: 13, reservada: true, disponible: "Habiitada" },
    {numero: 14, reservada: false, disponible: "Habiitada" },
    {numero: 15, reservada: false, disponible: "Habiitada" },
  ];
  mesasLocal: any = [
    {numero: 1, reservada: false, disponible: "Habiitada"},
    {numero: 2, reservada: false, disponible: "Habiitada" },
    {numero: 3, reservada: false, disponible: "Habiitada" },
    {numero: 4, reservada: false, disponible: "Habiitada" },
    {numero: 5, reservada: true, disponible: "Habiitada" },
    {numero: 6, reservada: false, disponible: "Habiitada" },
    {numero: 7, reservada: false, disponible: "Habiitada" },
    {numero: 8, reservada: false, disponible: "Habiitada" },
    {numero: 9, reservada: false, disponible: "Habiitada" },
    {numero: 10, reservada: false, disponible: "Habiitada" },
    {numero: 11, reservada: false, disponible: "Habiitada" },
    {numero: 12, reservada: false, disponible: "Habiitada" },
    {numero: 13, reservada: true, disponible: "Habiitada" },
    {numero: 14, reservada: false, disponible: "Habiitada" },
    {numero: 15, reservada: false, disponible: "Habiitada" },
  ];

  buscarMesa : string = "";
  constructor( private menu: MenuController) { }

  ngOnInit() {
    this.menu.enable(false);
  }

}
