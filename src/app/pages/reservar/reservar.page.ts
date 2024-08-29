import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController,MenuController } from '@ionic/angular';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.page.html',
  styleUrls: ['./reservar.page.scss'],
})
export class ReservarPage implements OnInit {
  tipomesa: string = "";
  
  constructor(private menu:MenuController,private router:Router,private alertController: AlertController) { }

  ngOnInit() {
    this.menu.enable(false);
  }

  async confirmarSeleccion() {
    if (this.tipomesa == "dentro") {
      this.router.navigate(['/mesaslocal']);
    } else if (this.tipomesa == "fuera") {
      this.router.navigate(['/mesasterraza']);
    } else {
      const alert = await this.alertController.create({
        header: 'Tiene que seleccionar una opcion',
        message: 'Por favor intentelo de nuevo',
        buttons: ['OK'],
      });
      await alert.present();
    }
}
}