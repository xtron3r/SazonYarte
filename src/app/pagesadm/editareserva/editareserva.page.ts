import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-editareserva',
  templateUrl: './editareserva.page.html',
  styleUrls: ['./editareserva.page.scss'],
})
export class EditareservaPage implements OnInit {

  constructor(private menu:MenuController) { }

  ngOnInit() {
    this.menu.enable(false);
  }

}
