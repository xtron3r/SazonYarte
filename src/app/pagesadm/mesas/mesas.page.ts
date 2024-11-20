import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ServicioBDService } from 'src/app/services/servicio-bd.service';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.page.html',
  styleUrls: ['./mesas.page.scss'],
})
export class MesasPage implements OnInit {

  mesas: any = [
    {
      id_mesa:'',
      nombre:'',
      c_sillas:'',
      id_ubi_fk:'',
      id_estado_fk:''
    }
  ]

  buscarMesa: string ="";
  constructor( private menu: MenuController, private bd: ServicioBDService, private router: Router) { }

  ngOnInit() {
    this.menu.enable(false);

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

  listarMesas(id_ubi_fk:string) {
    this.bd.buscarMesa(id_ubi_fk);
  }

  irEditar(x:any) {
    let navigationsExtras: NavigationExtras = {
      state: {
        mesa: x
      }
    }
    this.buscarMesa = "";
    this.router.navigate(['/editarmesa'], navigationsExtras);
  }

  eliminarMesa(mesa: any){

    this.buscarMesa = "";
    if (mesa.id_estado_fk == "Activado"){
      this.bd.deshabilitarMesa('1',mesa.id_mesa).then(res => {
        this.bd.DesactivarReservasPorMesaDesa(mesa.id_mesa, 'Mesa Deshabilitada');
      });
    }else{
      this.bd.deshabilitarMesa('2',mesa.id_mesa);
      this.bd.DesactivarReservasPorMesaDesa(mesa.id_mesa, 'Mesa Habilitada');
    }
  }

  irAgregar(){
    this.buscarMesa = "";
    this.router.navigate(['/agregarmesa']);

  }

}
