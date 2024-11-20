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
    id_bloque_fk:'',
    motivo:'',
    id_estado_fk:'',
  }];

  motivo!:string

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

  async eliminarReserva(reserva:any) {

    if (reserva.motivo == "Usuario Deshabilitado"){
      this.mostrarAlerta('Alerta', 'El Usuario esta deshabilitado');
      return;
    }
    if (reserva.motivo == "Mesa Deshabilitada"){
      this.mostrarAlerta('Alerta', 'La mesa esta deshabilitada');
      return;
    }

    const alert = await this.alertController.create({
      header: 'Reserva',
      message: 'Ingrese el motivo para cambiar el estado de la reserva:',
      inputs: [
        {
          name: 'motivo',
          type: 'text',
          placeholder: 'Motivo',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Aceptar',
          handler: (data) => {
            if (data.motivo) {

              if(reserva.id_estado_fk == "Activado"){
                this.bd.ModificarReserva(data.motivo,'1',reserva.id_reserva)
              }else{
                this.bd.ModificarReserva(data.motivo,'2',reserva.id_reserva)
              }

            } else {
              this.mostrarAlerta('Error', 'Debe ingresar un motivo para cambiar el estado.');
            }
          },
        },
      ],
      cssClass: 'estilo-alertas'
    });
  
    await alert.present();
    
  }
  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK'],
      cssClass:'estilo-alertas'
    });
    await alert.present();
  }

}
