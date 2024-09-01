import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.page.html',
  styleUrls: ['./mesas.page.scss'],
})
export class MesasPage implements OnInit {

  mesasTerraza: any = [
    {numero: 1, reservada: false, disponible: "Habilitada"},
    {numero: 2, reservada: false, disponible: "Habilitada" },
    {numero: 3, reservada: false, disponible: "Habilitada" },
    {numero: 4, reservada: false, disponible: "Habilitada" },
    {numero: 5, reservada: true, disponible: "Habilitada" },
    {numero: 6, reservada: false, disponible: "Habilitada" },
    {numero: 7, reservada: false, disponible: "Habilitada" },
    {numero: 8, reservada: false, disponible: "Habilitada" },
    {numero: 9, reservada: false, disponible: "Habilitada" },
    {numero: 10, reservada: false, disponible: "Habilitada" },
    {numero: 11, reservada: false, disponible: "Habilitada" },
    {numero: 12, reservada: false, disponible: "Habilitada" },
    {numero: 13, reservada: true, disponible: "Habilitada" },
    {numero: 14, reservada: false, disponible: "Habilitada" },
    {numero: 15, reservada: false, disponible: "Habilitada" },
  ];
  mesasLocal: any = [
    {numero: 1, reservada: false, disponible: "Habilitada"},
    {numero: 2, reservada: false, disponible: "Habilitada" },
    {numero: 3, reservada: false, disponible: "Habilitada" },
    {numero: 4, reservada: false, disponible: "Habilitada" },
    {numero: 5, reservada: true, disponible: "Habilitada" },
    {numero: 6, reservada: false, disponible: "Habilitada" },
    {numero: 7, reservada: false, disponible: "Habilitada" },
    {numero: 8, reservada: false, disponible: "Habilitada" },
    {numero: 9, reservada: false, disponible: "Habilitada" },
    {numero: 10, reservada: false, disponible: "Habilitada" },
    {numero: 11, reservada: false, disponible: "Habilitada" },
    {numero: 12, reservada: false, disponible: "Habilitada" },
    {numero: 13, reservada: true, disponible: "Habilitada" },
    {numero: 14, reservada: false, disponible: "Habilitada" },
    {numero: 15, reservada: false, disponible: "Habilitada" },
  ];

  buscarMesa : string = "";
  constructor( private menu: MenuController) { }

  ngOnInit() {
    this.menu.enable(false);
  }

}
