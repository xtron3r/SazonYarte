import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { AlertController, MenuController, ToastController } from '@ionic/angular';
import { ServicioBDService } from 'src/app/services/servicio-bd.service';

@Component({
  selector: 'app-contacto-login',
  templateUrl: './contacto-login.page.html',
  styleUrls: ['./contacto-login.page.scss'],
})
export class ContactoLoginPage implements OnInit {


  nombre: string = "";
  usuario: string = "";
  telefono: string = "";
  correo: string = "";

  mensaje: string = "";

  constructor(private menu:MenuController, private alertController: AlertController, private toastController: ToastController, private bd:ServicioBDService,private storage: NativeStorage) { 

  }

  ngOnInit() {
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
