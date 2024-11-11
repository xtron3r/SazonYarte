import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { MenuController, AlertController } from '@ionic/angular';
import { ServicioBDService } from 'src/app/services/servicio-bd.service';

@Component({
  selector: 'app-misreservas',
  templateUrl: './misreservas.page.html',
  styleUrls: ['./misreservas.page.scss'],
})
export class MisreservasPage implements OnInit {

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

  id_usuario!: number;
  BuscarReserva: string = '2';

  constructor(private menu: MenuController,private bd: ServicioBDService, private alertController: AlertController, private storage: NativeStorage) { 
 
  }
  ionViewWillEnter(){
       this.storage.getItem('usuario').then(data=>{
      this.id_usuario = data;

      // llama a la consulta solo cuando se haya obtenido el id
      return this.listarReservasDelUsuario(this.id_usuario);

    }).then(data => {
      this.reserva = data;
    });
  }
  ngOnInit() {
    this.menu.enable(false);

  }

  listarReservasDelUsuario(id_usuario_fk: number) {
    this.bd.listarReservasPorUsuario(id_usuario_fk).then(() => {
      this.bd.fetchReservas().subscribe((reservas) => {
        this.reserva = reservas;
      });
    });
  }

  BuscarReservas(){
    if (this.BuscarReserva === '1'){
      this.bd.listarReservasPorUsuarioDesa(this.id_usuario).then(() => {
        this.bd.fetchReservas().subscribe((reservas) => {
          this.reserva = reservas;
        });
      });
    }else{
      this.bd.listarReservasPorUsuario(this.id_usuario).then(() => {
        this.bd.fetchReservas().subscribe((reservas) => {
          this.reserva = reservas;
        });
      });
    }
  }

  async eliminarReserva(reserva:any) {
    const alert = await this.alertController.create({
      header: 'Reserva',
      message: 'Ingrese el motivo por el que desea cancelar la reserva',
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
              this.bd.ModificarReserva(data.motivo,'1',reserva.id_reserva)
              this.BuscarReserva = '1'
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
