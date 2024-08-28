import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-mesasterraza',
  templateUrl: './mesasterraza.page.html',
  styleUrls: ['./mesasterraza.page.scss'],
})
export class MesasterrazaPage implements OnInit {

  T1Selected = false;
  T2Selected = false;
  T3Selected = false;
  T4Selected = false;
  T5Selected = false;
  T6Selected = false;
  T7Selected = false;
  T8Selected = false;
  T9Selected = false;
  T10Selected = false;
  T11Selected = false;
  T12Selected = false;
  T13Selected = false;
  T14Selected = false;
  T15Selected = false;

  constructor(private menu: MenuController) { }

  ngOnInit() {
    this.menu.enable(false);
  }

  seleccionarAsiento(asiento: string) {
    if (asiento === 'T1') this.T1Selected = !this.T1Selected;
    if (asiento === 'T2') this.T2Selected = !this.T2Selected;
    if (asiento === 'T3') this.T3Selected = !this.T3Selected;
    if (asiento === 'T4') this.T4Selected = !this.T4Selected;
    if (asiento === 'T5') this.T5Selected = !this.T5Selected;
    if (asiento === 'T6') this.T6Selected = !this.T6Selected;
    if (asiento === 'T7') this.T7Selected = !this.T7Selected;
    if (asiento === 'T8') this.T8Selected = !this.T8Selected;
    if (asiento === 'T9') this.T9Selected = !this.T9Selected;
    if (asiento === 'T10') this.T10Selected = !this.T10Selected;
    if (asiento === 'T11') this.T11Selected = !this.T11Selected;
    if (asiento === 'T12') this.T12Selected = !this.T12Selected;
    if (asiento === 'T13') this.T13Selected = !this.T13Selected;
    if (asiento === 'T14') this.T14Selected = !this.T14Selected;
    if (asiento === 'T15') this.T15Selected = !this.T15Selected;
  }

  isSelected(asiento: string): boolean {
    if (asiento === 'T1') return this.T1Selected;
    if (asiento === 'T2') return this.T2Selected;
    if (asiento === 'T3') return this.T3Selected;
    if (asiento === 'T4') return this.T4Selected;
    if (asiento === 'T5') return this.T5Selected;
    if (asiento === 'T6') return this.T6Selected;
    if (asiento === 'T7') return this.T7Selected;
    if (asiento === 'T8') return this.T8Selected;
    if (asiento === 'T9') return this.T9Selected;
    if (asiento === 'T10') return this.T10Selected;
    if (asiento === 'T11') return this.T11Selected;
    if (asiento === 'T12') return this.T12Selected;
    if (asiento === 'T13') return this.T13Selected;
    if (asiento === 'T14') return this.T14Selected;
    if (asiento === 'T15') return this.T15Selected;
    return false;
  }
}


