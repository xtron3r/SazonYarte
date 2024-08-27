import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-mesaslocal',
  templateUrl: './mesaslocal.page.html',
  styleUrls: ['./mesaslocal.page.scss'],
})
export class MesaslocalPage implements OnInit {
  //Declaramos nuestra variable de tipo matriz 
  asientosLocal: any[][] = [
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
