import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.page.html',
  styleUrls: ['./reservar.page.scss'],
})
export class ReservarPage implements OnInit {
  tipomesa: string = "";
  
  constructor() { }

  ngOnInit() {
  }

}
