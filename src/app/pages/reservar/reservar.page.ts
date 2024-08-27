import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.page.html',
  styleUrls: ['./reservar.page.scss'],
})
export class ReservarPage implements OnInit {
  tipomesa: string = "dentro";
  
  constructor(private menu:MenuController,private router:Router) { }

  ngOnInit() {
    this.menu.enable(false);
  }

  confirmarSeleccion() {
    if (this.tipomesa === "dentro") {
      this.router.navigate(['/mesaslocal']);
    } else if (this.tipomesa === "fuera") {
      this.router.navigate(['/mesasterraza']);
    } else { 
  }
}
}