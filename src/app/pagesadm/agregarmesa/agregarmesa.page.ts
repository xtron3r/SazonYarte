import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-agregarmesa',
  templateUrl: './agregarmesa.page.html',
  styleUrls: ['./agregarmesa.page.scss'],
})
export class AgregarmesaPage implements OnInit {
  
  constructor(private menu: MenuController) { }

  ngOnInit() {
    this.menu.enable(false);
  }

}
