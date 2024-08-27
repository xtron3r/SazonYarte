import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-mesasterraza',
  templateUrl: './mesasterraza.page.html',
  styleUrls: ['./mesasterraza.page.scss'],
})
export class MesasterrazaPage implements OnInit {
//Declaramos nuestra variable de tipo matriz 
  asientosTerraza: any[][] = [
    [{ numero: "L1", ocupado: false }, { numero: "l2", ocupado: true }, { numero: "l3", ocupado: false }, { numero: "l4", ocupado: true },{ numero: "L5", ocupado: false } ],
    [{ numero: "L6", ocupado: true }, { numero: "L7", ocupado: false }, { numero: "L8", ocupado: false },{ numero: "L9", ocupado: false },{ numero: "L10", ocupado: false }  ],
    [{ numero: "L11", ocupado: true }, { numero: "L12", ocupado: false }, { numero: "L13", ocupado: false }, { numero: "14", ocupado: true }, { numero: "L15", ocupado: false }  ],
  ];
  constructor(private menu:MenuController) { }

  ngOnInit() {
    this.menu.enable(false);
  }

  seleccionarAsiento(asiento: any) {
    asiento.ocupado = !asiento.ocupado;
  }
}
