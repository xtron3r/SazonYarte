import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { AlertController, MenuController, ToastController } from '@ionic/angular';
import { ServicioBDService } from 'src/app/services/servicio-bd.service';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  nombre: string = "";
  usuario: string = "";
  telefono: string = "";
  correo: string = "";
  id_usuario!: number;

  mensaje: string = "";

  constructor(private menu:MenuController, private alertController: AlertController, private toastController: ToastController, private bd:ServicioBDService,private storage: NativeStorage) { }
 
  ngOnInit() {
    this.menu.enable(false);
  }

  ionViewWillEnter(){

    this.storage.getItem('usuario').then(data=>{
      this.id_usuario = data;

      // llama a la consulta solo cuando se haya obtenido el id
      return this.bd.miPerfil(this.id_usuario);

    }).then(data => {
      if (data) {
        this.nombre = data.nombrecompleto;
        this.telefono = data.telefono;
        this.correo = data.correo;
      }
    });
  }
  insertarC(){
    this.bd.insertarContacto(this.nombre, this.telefono,this.correo, this.mensaje);
  }
  async enviarFormulario(){
    if(this.nombre == "" || this.telefono == "" || this.mensaje == "" || this.correo == ""){
      const alert = await this.alertController.create({
        header: 'Campos Vacios',
        message: 'Por favor intente de nuevo',
        buttons: ['OK'],
        cssClass: 'estilo-alertas'
      });
      await alert.present(); 
    }
    else{
      this.insertarC();
      this.mensajeContacto('bottom');
      this.mensaje = "";
      
    }  
  }
  async mensajeContacto(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Mensaje enviado con exito !',
      duration: 2000,
      position: position,
      cssClass: 'estilo-alertas'
    });
    await toast.present();
  }


}
