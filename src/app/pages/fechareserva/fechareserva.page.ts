import { Component, OnInit } from '@angular/core';
import { ServicioBDService } from 'src/app/services/servicio-bd.service';
import { AlertController } from '@ionic/angular';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Component({
  selector: 'app-fechareserva',
  templateUrl: './fechareserva.page.html',
  styleUrls: ['./fechareserva.page.scss'],
})
export class FechareservaPage implements OnInit {

  fechaSelec: Date;
  
  today = new Date(); // Fecha actual
  minDate: Date;
  maxDate: Date;

  bloque : any = [{
    id_bloque: '',
    h_inicio: '',
    h_fin: '',
  }];

  mesas: any = [{
    id_mesa:'',
    nombre:'',
    c_sillas:'',
    id_ubi_fk:''
  }];

  bloqueSele: any; // Array para almacenar hora seleccionada
  mesaSeleccionada: any;

  buscarMesa: string = "";
  id_usuario!: number;

  constructor(private bd: ServicioBDService, private alertController: AlertController,private storage: NativeStorage) {

    this.storage.getItem('usuario').then(data=>{
      this.id_usuario = data;
    });

    // fecha minima 
    this.minDate = this.today;
 
    // Fecha máxima: 31 de diciembre de 2024
    this.maxDate = new Date(2024, 11, 31);
     
    this.fechaSelec = new Date();

    this.bd.dbState().subscribe(data => {
      // validar si la base de datos está lista
      if (data) {
        // subscribir al observable de usuarios
        this.bd.fetchBloque().subscribe(res => {
          this.bloque = res;
        });
      }
    });

    this.bd.dbState().subscribe(data => {
      // validar si la base de datos esta lista
      if (data) {
        // subscribir al observable de usuarios
        this.bd.fetchMesas().subscribe(res => {
          this.mesas = res;
        });
      }
    });
  }

  ngOnInit() {
  }


  listarMesas(id_ubi_fk:string) {
    this.bd.buscarMesa(id_ubi_fk);
  }

  Reservar(id_mesa:number) {
    if (this.fechaSelec == null || this.bloqueSele == null || id_mesa == null){
      this.Alerta('Error en Reservar','No pueden haber campos sin seleccion')
    } else{
      this.bd.insertarReserva(this.fechaSelec,this.today,this.id_usuario,id_mesa,this.bloqueSele);
    }
  }

  async Alerta(titulo: string, msj:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: msj,
      buttons: ['OK'],
      cssClass:'estilo-alertas'
    });

    await alert.present();
  }

}
