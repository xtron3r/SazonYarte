import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.page.html',
  styleUrls: ['./reservar.page.scss'],
})
export class ReservarPage implements OnInit {
  tipomesa: string = "";
  
  constructor(private menu:MenuController) { }

  ngOnInit() {
    this.menu.enable(false);
  }

}
