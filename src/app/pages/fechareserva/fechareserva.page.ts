import { Component, OnInit } from '@angular/core';
import { ServicioBDService } from 'src/app/services/servicio-bd.service';
import { AlertController } from '@ionic/angular';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-fechareserva',
  templateUrl: './fechareserva.page.html',
  styleUrls: ['./fechareserva.page.scss'],
  providers: [DatePipe] 
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


  // Variables para controlar la activacion de secciones
  MesaTomada: boolean = false; // Controla si se puede buscar mesas

  constructor(private bd: ServicioBDService, private alertController: AlertController,private storage: NativeStorage,private datePipe: DatePipe) {

    this.storage.getItem('usuario').then(data=>{
      this.id_usuario = data;
    });

    // fecha minima 
    this.minDate = this.today;
 
    // Fecha maxima: 31 de diciembre de 2024
    this.maxDate = new Date(2024, 11, 31);
     
    this.fechaSelec = new Date();

    this.bd.dbState().subscribe(data => {
      // validar si la base de datos esta lista
      if (data) {
        // subscribir al observable de usuarios
        this.bd.fetchBloque().subscribe(res => {
          this.bloque = res;
        });
      }
    });
  }

  ngOnInit() {
  }

  CambioFecha() {
    this.listarMesas(this.buscarMesa);
  }
  CambioBloque() {
      this.listarMesas(this.buscarMesa);
  }

  listarMesas(id_ubi_fk:string) {

    // Formatear la fecha al formato día/mes/año
     let FechaFormato = this.datePipe.transform(this.fechaSelec, 'dd/MM/yyyy'); 
    
    if (FechaFormato && this.bloqueSele) {
      this.bd.ListarMesasDisponibles(id_ubi_fk,FechaFormato,this.bloqueSele).then(data => {
        this.mesas = data;

        if (this.mesas.length == 0) {
          this.Alerta('Sin Mesas', 'No hay mesas disponibles para la fecha y hora seleccionadas.');
        }
      });
    }
  }

  Reservar(id_mesa:number) {

     // Formatear la fecha al formato día/mes/año
     let FechaFormato = this.datePipe.transform(this.fechaSelec, 'dd/MM/yyyy');
     let FechaFormatoHoy = this.datePipe.transform(this.today, 'dd/MM/yyyy');

    if (FechaFormato == null || this.bloqueSele == null || id_mesa == null || FechaFormatoHoy == null) {
      this.Alerta('Error en Reservar', 'No pueden haber campos sin seleccion');
    } else {
      this.bd.insertarReserva(FechaFormato, FechaFormatoHoy, this.id_usuario, id_mesa, this.bloqueSele);
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
