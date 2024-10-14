import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fechareserva',
  templateUrl: './fechareserva.page.html',
  styleUrls: ['./fechareserva.page.scss'],
})
export class FechareservaPage implements OnInit {

  selectedDate: Date;

  
  today = new Date(); // Fecha actual
  minDate: Date;
  maxDate: Date;


  constructor() {
     // Establecer la fecha mínima como la fecha actual o el 1 de enero de 2024, lo que sea mayor
     const nextYearStart = new Date(2024, 0, 1); // 1 de enero de 2024
     this.minDate = this.today > nextYearStart ? this.today : nextYearStart;
 
     // Fecha máxima: 31 de diciembre de 2024
     this.maxDate = new Date(2024, 11, 31);
     
     this.selectedDate = new Date();
  }

  ngOnInit() {
  }

}
