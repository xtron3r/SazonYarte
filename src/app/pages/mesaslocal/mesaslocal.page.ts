import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-mesaslocal',
  templateUrl: './mesaslocal.page.html',
  styleUrls: ['./mesaslocal.page.scss'],
})
export class MesaslocalPage implements OnInit {

  // Propiedades booleanas para cada botón
  L1Selected = false;
  L2Selected = false;
  L3Selected = false;
  L4Selected = false;
  L5Selected = false;
  L6Selected = false;
  L7Selected = false;
  L8Selected = false;
  L9Selected = false;
  L10Selected = false;
  L11Selected = false;
  L12Selected = false;
  L13Selected = false;
  L14Selected = false;
  L15Selected = false;

  constructor(private menu: MenuController) { }

  ngOnInit() {
    this.menu.enable(false);
  }

  seleccionarAsiento(asiento: string) {
    if (asiento === 'L1') this.L1Selected = !this.L1Selected;
    if (asiento === 'L2') this.L2Selected = !this.L2Selected;
    if (asiento === 'L3') this.L3Selected = !this.L3Selected;
    if (asiento === 'L4') this.L4Selected = !this.L4Selected;
    if (asiento === 'L5') this.L5Selected = !this.L5Selected;
    if (asiento === 'L6') this.L6Selected = !this.L6Selected;
    if (asiento === 'L7') this.L7Selected = !this.L7Selected;
    if (asiento === 'L8') this.L8Selected = !this.L8Selected;
    if (asiento === 'L9') this.L9Selected = !this.L9Selected;
    if (asiento === 'L10') this.L10Selected = !this.L10Selected;
    if (asiento === 'L11') this.L11Selected = !this.L11Selected;
    if (asiento === 'L12') this.L12Selected = !this.L12Selected;
    if (asiento === 'L13') this.L13Selected = !this.L13Selected;
    if (asiento === 'L14') this.L14Selected = !this.L14Selected;
    if (asiento === 'L15') this.L15Selected = !this.L15Selected;
  }

  isSelected(asiento: string): boolean {
    if (asiento === 'L1') return this.L1Selected;
    if (asiento === 'L2') return this.L2Selected;
    if (asiento === 'L3') return this.L3Selected;
    if (asiento === 'L4') return this.L4Selected;
    if (asiento === 'L5') return this.L5Selected;
    if (asiento === 'L6') return this.L6Selected;
    if (asiento === 'L7') return this.L7Selected;
    if (asiento === 'L8') return this.L8Selected;
    if (asiento === 'L9') return this.L9Selected;
    if (asiento === 'L10') return this.L10Selected;
    if (asiento === 'L11') return this.L11Selected;
    if (asiento === 'L12') return this.L12Selected;
    if (asiento === 'L13') return this.L13Selected;
    if (asiento === 'L14') return this.L14Selected;
    if (asiento === 'L15') return this.L15Selected;
    return false;
  }
}
