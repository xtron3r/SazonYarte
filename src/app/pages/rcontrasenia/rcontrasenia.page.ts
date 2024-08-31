import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-rcontrasenia',
  templateUrl: './rcontrasenia.page.html',
  styleUrls: ['./rcontrasenia.page.scss'],
})
export class RcontraseniaPage implements OnInit {

  correo: string = "";

  constructor(private menu:MenuController) { }

  ngOnInit() {
    this.menu.enable(false);
  }


}
