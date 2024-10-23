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
    id_bloque_fk:''
  }];

  id_usuario!: number;

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

  eliminarReserva(id_reserva:string){
    this.bd.eliminarReserva(id_reserva);
  }
  listarReservasDelUsuario(id_usuario_fk: number) {
    this.bd.listarReservasPorUsuario(id_usuario_fk).then(() => {
      this.bd.fetchReservas().subscribe((reservas) => {
        this.reserva = reservas;
      });
    });
  }


}
