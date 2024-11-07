import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { ServicioBDService } from 'src/app/services/servicio-bd.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage implements OnInit {


  reserva: any = [{
    id_reserva: '',
    f_reserva:'',
    f_creacion:'',
    id_usuario_fk:'',
    id_mesa_fk:'',
    id_bloque_fk:''
  }];

  constructor(private menu: MenuController,private bd: ServicioBDService, private alertController: AlertController) { 
  }

  ngOnInit() {
    this.menu.enable(false);
  }

  ionViewWillEnter(){
    this.bd.listarReservas();
    this.bd.listadoReservas.subscribe(data => {
      this.reserva = data;
    });
  }

  eliminarReserva(id_reserva:string){
    this.bd.eliminarReserva(id_reserva);
  }

}
