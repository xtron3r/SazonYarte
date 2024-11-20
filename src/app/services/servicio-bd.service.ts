 import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { BehaviorSubject, from, map, Observable } from 'rxjs';
import { Contacto } from './contacto';
import { Bloque } from './bloque';
import { Ubicacion } from './ubicacion';
import { Mesas } from './mesas';
import { Reserva } from './reserva';
import { Rol } from './rol';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicioBDService {

  // Variable de conexion a Base de Datos
  public database!: SQLiteObject;

  // Variable de creacion de Tablas

  // Tabla de contacto

  tablaContacto: string = "CREATE TABLE IF NOT EXISTS contacto ( id_contacto INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, nombrecompleto VARCHAR NOT NULL, telefono INTEGER NOT NULL, correo VARCHAR NOT NULL, mensaje TEXT NOT NULL);";

  registroContacto: string = "INSERT or IGNORE INTO contacto(id_contacto, nombrecompleto, telefono, correo, mensaje) VALUES (1,'Esteban', '959808217', 'este.toledo@duocuc.cl', 'Este es un mensaje de prueba')";
  registroContacto2: string = "INSERT or IGNORE INTO contacto(id_contacto, nombrecompleto, telefono, correo, mensaje) VALUES (2,'PEPE', '959808217', 'este.toledo@duocuc.cl', 'Este es un mensaje de prueba')";

  // Tabla Bloque

  tablaBloque: string = "CREATE TABLE IF NOT EXISTS bloque (id_bloque INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, h_inicio DATETIME NOT NULL, h_fin DATETIME NOT NULL);";

  registroBloque1: string = "INSERT or IGNORE INTO bloque(id_bloque, h_inicio, h_fin) VALUES (1, '12:30', '13:30')";
  registroBloque2: string = "INSERT or IGNORE INTO bloque(id_bloque, h_inicio, h_fin) VALUES (2, '14:00', '15:00')";
  registroBloque3: string = "INSERT or IGNORE INTO bloque(id_bloque, h_inicio, h_fin) VALUES (3, '15:30', '16:30')";
  registroBloque4: string = "INSERT or IGNORE INTO bloque(id_bloque, h_inicio, h_fin) VALUES (4, '17:00', '18:00')";
  registroBloque5: string = "INSERT or IGNORE INTO bloque(id_bloque, h_inicio, h_fin) VALUES (5, '18:30', '19:30')";
  registroBloque6: string = "INSERT or IGNORE INTO bloque(id_bloque, h_inicio, h_fin) VALUES (6, '20:00', '21:00')";
  registroBloque7: string = "INSERT or IGNORE INTO bloque(id_bloque, h_inicio, h_fin) VALUES (7, '21:30', '22:30')";
  registroBloque8: string = "INSERT or IGNORE INTO bloque(id_bloque, h_inicio, h_fin) VALUES (8, '23:00', '00:00')";
  
  // Tabla Ubicacion

  tablaUbicacion: string = "CREATE TABLE IF NOT EXISTS ubicacion (id_ubicacion INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, nombre VARCHAR NOT NULL);";

  registroUbicacion: string = "INSERT or IGNORE INTO ubicacion(id_ubicacion, nombre) VALUES (1, 'Terraza')";
  registroUbicacion2: string = "INSERT or IGNORE INTO ubicacion(id_ubicacion, nombre) VALUES (2, 'Local')";

  // Tabla Mesas

  tablaMesas: string = "CREATE TABLE IF NOT EXISTS mesas (id_mesa INTEGER NOT NULL PRIMARY KEY, nombre VARCHAR NOT NULL, c_sillas INTEGER NOT NULL, id_ubi_fk INTEGER, id_estado_fk INTEGER, FOREIGN KEY (id_ubi_fk) REFERENCES Ubicacion (id_ubicacion), FOREIGN KEY (id_estado_fk) REFERENCES estado (id_estado));";

  // Mesas Terrazas
  registroMesaTerraza: string = "INSERT or IGNORE INTO mesas(id_mesa, nombre, c_sillas, id_ubi_fk, id_estado_fk) VALUES (1, 'Mesa 1', 4, 1,'2')";
  registroMesaTerraza2: string = "INSERT or IGNORE INTO mesas(id_mesa, nombre, c_sillas, id_ubi_fk, id_estado_fk) VALUES (2, 'Mesa 2', 2, 1,'2')";
  registroMesaTerraza3: string = "INSERT or IGNORE INTO mesas(id_mesa, nombre, c_sillas, id_ubi_fk, id_estado_fk) VALUES (3, 'Mesa 3', 3, 1,'2')";

  // Mesas Locales
  registroMesaLocal: string = "INSERT or IGNORE INTO mesas(id_mesa, nombre, c_sillas, id_ubi_fk, id_estado_fk) VALUES (4, 'Mesa 1', 4, 2,'2')";
  registroMesaLocal2: string = "INSERT or IGNORE INTO mesas(id_mesa, nombre, c_sillas, id_ubi_fk, id_estado_fk) VALUES (5, 'Mesa 2', 5, 2,'2')";
  registroMesaLocal3: string = "INSERT or IGNORE INTO mesas(id_mesa, nombre, c_sillas, id_ubi_fk, id_estado_fk) VALUES (6, 'Mesa 3', 3, 2,'2')";

  // Tabla Reservas

  tablaReservas: string = "CREATE TABLE IF NOT EXISTS reserva (id_reserva INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, f_reserva DATE NOT NULL, f_creacion DATE NOT NULL, motivo VARCHAR, id_usuario_fk INTEGER NOT NULL, id_mesa_fk INTEGER NOT NULL, id_bloque_fk INTEGER NOT NULL, id_estado_fk VARCHAR, FOREIGN KEY (id_usuario_fk) REFERENCES Usuario (id_usuario), FOREIGN KEY (id_mesa_fk) REFERENCES Mesas (id_mesa), FOREIGN KEY (id_bloque_fk) REFERENCES Bloque (id_bloque),FOREIGN KEY (id_estado_fk) REFERENCES estado (id_estado));";

  registroReserva: string = "INSERT or IGNORE INTO reserva(id_reserva, f_reserva, f_creacion, motivo, id_usuario_fk, id_mesa_fk, id_bloque_fk,id_estado_fk) VALUES (1,'30/10/2024','19/10/2024','',2,2,1,'2');";

  // tabla Rol

  tablaRol: string = "CREATE TABLE IF NOT EXISTS rol (id_rol INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, nombre VARCHAR NOT NULL);";

  registroRol: string = "INSERT or IGNORE INTO rol(id_rol, nombre) VALUES (1, 'Administrador')";
  registroRol2: string = "INSERT or IGNORE INTO rol(id_rol, nombre) VALUES (2, 'Usuario')";

  tablaEstado: string = "CREATE TABLE IF NOT EXISTS estado (id_estado INTEGER NOT NULL PRIMARY KEY, nombre VARCHAR NOT NULL);"

  registroEstado1: string = "INSERT or IGNORE INTO estado(id_estado, nombre) VALUES (1, 'Deshabilitado')";
  registroEstado2: string = "INSERT or IGNORE INTO estado(id_estado, nombre) VALUES (2, 'Activado')";

  // Tabla Usuario

  tablaUsuario: string = "CREATE TABLE IF NOT EXISTS Usuario (id_usuario INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, rut VARCHAR(10) NOT NULL, nombreusuario VARCHAR NOT NULL UNIQUE, nombrecompleto VARCHAR NOT NULL, contrasenia VARCHAR NOT NULL, telefono INTEGER NOT NULL, correo VARCHAR NOT NULL, fotousuario TEXT, id_rol_fk INTEGER NOT NULL, id_estado_fk VARCHAR, FOREIGN KEY (id_rol_fk) REFERENCES Rol (id_rol), FOREIGN KEY (id_estado_fk) REFERENCES estado (id_estado));";

  registroAdmin: string = "INSERT or IGNORE INTO Usuario(id_usuario, rut, nombreusuario, nombrecompleto, contrasenia, telefono, correo, fotousuario, id_rol_fk, id_estado_fk) VALUES (1,'202211013', 'Admin', 'Admin', 'Admin123', 930935460,'admin@duocuc.cl','',1,'2')";

  registroUsuario2: string = "INSERT or IGNORE INTO Usuario(id_usuario, rut, nombreusuario, nombrecompleto, contrasenia, telefono, correo, fotousuario, id_rol_fk, id_estado_fk) VALUES (2,'213781146', 'Manolo', 'Aroneitor', 'Hola123', 930935460, 'aaronleal2003@gmail.com','', 2,'2')";

  registroUsuario3: string = "INSERT or IGNORE INTO Usuario(id_usuario, rut, nombreusuario, nombrecompleto, contrasenia, telefono, correo, fotousuario, id_rol_fk, id_estado_fk) VALUES (3,'205902058', 'RayCL', 'Basthian Bascuñan', 'Hola123', 959808217, 'bast.bascunan@duocuc.cl','', 2,'2')";

  //variables para guardar los datos de las consultas en las tablas
  
  listadoContacto = new BehaviorSubject([]);
  listadoBloque = new BehaviorSubject([]);
  listadoUbicacion = new BehaviorSubject([]);
  listadoMesas = new BehaviorSubject([]);
  listadoReservas = new BehaviorSubject([]);
  listadoRol = new BehaviorSubject([]);
  listadoUsuario = new BehaviorSubject([]);
  listadoEstados = new BehaviorSubject([]);
  

  //variable para el status de la Base de datos
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);


  constructor(private sqlite: SQLite, private platform: Platform, private alertController: AlertController) {
    this.createBD();
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

  //metodos para manipular los observables

  fetchContacto(): Observable<Contacto[]>{
    return this.listadoContacto.asObservable();
  }
  fetchBloque(): Observable<Bloque[]>{
    return this.listadoBloque.asObservable();
  }

  fetchUbicacion(): Observable<Ubicacion[]>{
    return this.listadoUbicacion.asObservable();
  }

  fetchMesas(): Observable<Mesas[]>{
    return this.listadoMesas.asObservable();
  }
  fetchReservas(): Observable<Reserva[]>{
    return this.listadoReservas.asObservable();
  }

  fetchRol(): Observable<Rol[]>{
    return this.listadoRol.asObservable();
  }

  fetchUsuario(): Observable<Usuario[]>{
    return this.listadoUsuario.asObservable();
  }

  fetchEstado(): Observable<Usuario[]>{
    return this.listadoEstados.asObservable();
  }


  dbState(){
    return this.isDBReady.asObservable();
  }

  //función para crear la Base de Datos
  createBD(){
    //varificar si la plataforma esta disponible
    this.platform.ready().then(()=>{
      //crear la Base de Datos
      this.sqlite.create({
        name: 'sazonyarte.db',
        location: 'default'
      }).then((db: SQLiteObject)=>{

        //capturar la conexion a la BD
        this.database = db;
        //llamamos a la función para crear las tablas
        this.crearTablas();
      }).catch(e=>{
        this.Alerta('Base de Datos', 'Error en crear la BD: ' + JSON.stringify(e));
      })
    })
  }

  async crearTablas(){
    try{
      //ejecuto la creación de Tablas
      await this.database.executeSql(this.tablaContacto, []);
      await this.database.executeSql(this.tablaBloque, []);
      await this.database.executeSql(this.tablaUbicacion, []);
      await this.database.executeSql(this.tablaMesas, []);
      await this.database.executeSql(this.tablaReservas, []);
      await this.database.executeSql(this.tablaRol, []);
      await this.database.executeSql(this.tablaUsuario, []);
      await this.database.executeSql(this.tablaEstado, []);

      //ejecuto los insert por defecto en el caso que existan
      await this.database.executeSql(this.registroContacto, []);
      await this.database.executeSql(this.registroContacto2, []);
      await this.database.executeSql(this.registroBloque1, []);
      await this.database.executeSql(this.registroBloque2, []);
      await this.database.executeSql(this.registroBloque3, []);
      await this.database.executeSql(this.registroBloque4, []);
      await this.database.executeSql(this.registroBloque5, []);
      await this.database.executeSql(this.registroBloque6, []);
      await this.database.executeSql(this.registroBloque7, []);
      await this.database.executeSql(this.registroBloque8, []);
      await this.database.executeSql(this.registroUbicacion, []);
      await this.database.executeSql(this.registroUbicacion2, []);
      await this.database.executeSql(this.registroMesaTerraza, []);
      await this.database.executeSql(this.registroMesaTerraza2, []);
      await this.database.executeSql(this.registroMesaTerraza3, []);
      await this.database.executeSql(this.registroMesaLocal, []);
      await this.database.executeSql(this.registroMesaLocal2, []);
      await this.database.executeSql(this.registroMesaLocal3, []);
      await this.database.executeSql(this.registroEstado1, []);
      await this.database.executeSql(this.registroEstado2, []);

      await this.database.executeSql(this.registroRol, []);
      await this.database.executeSql(this.registroRol2, []);
      await this.database.executeSql(this.registroAdmin, []);
      await this.database.executeSql(this.registroUsuario2, []);
      await this.database.executeSql(this.registroUsuario3, []);
      await this.database.executeSql(this.registroReserva, []);
      
      //llamamos a la función para seleccionar los datos de las tablas

      this.listarContactos();
      this.listarUsuario();
      this.listarReservas();
      this.listarBloques();
      
      //modifico el estado de la Base de Datos
      this.isDBReady.next(true);

    }catch(e){
      this.Alerta('Creación de Tablas', 'Error en crear las tablas: ' + JSON.stringify(e));
    }
  }

  // funciones de contacto
  listarContactos(){
    return this.database.executeSql('SELECT * FROM contacto', []).then(res=>{
      //variable para almacenar el resultado de la consulta
      let items: Contacto[] = [];
      //valido si trae al menos un registro
      if(res.rows.length > 0){
       //recorro mi resultado
       for(var i=0; i < res.rows.length; i++){
         //agrego los registros a mi lista
         items.push({
          id_contacto: res.rows.item(i).id_contacto,
          nombreCompleto: res.rows.item(i).nombrecompleto,
          telefono: res.rows.item(i).telefono,
          correo: res.rows.item(i).correo,
          mensaje: res.rows.item(i).mensaje
         })
       }
       
      }
      //actualizar el observable
      this.listadoContacto.next(items as any);

   })
  }
  eliminarContacto(id_contacto:string){
    return this.database.executeSql('DELETE FROM contacto WHERE id_contacto = ?',[id_contacto]).then(res=>{
      this.Alerta("Eliminar","Contacto Eliminado");
      this.listarContactos();
    }).catch(e=>{
      this.Alerta('Eliminar', 'Error: ' + JSON.stringify(e));
    })
  }

  insertarContacto(nombrecompleto: string, telefono: string, correo: string, mensaje: string) {
    return this.database.executeSql(
      'INSERT INTO contacto (nombrecompleto, telefono, correo, mensaje) VALUES (?, ?, ?, ?)', 
      [nombrecompleto, telefono, correo, mensaje]
    ).then(res => {
      this.listarContactos();
    }).catch(e => {
      this.Alerta('Contacto', 'Error: ' + JSON.stringify(e));
    });
  }


 //funciones de usuario

 listarUsuario() {
  return this.database.executeSql('SELECT u.id_usuario, u.rut, u.nombreusuario, u.nombrecompleto, u.correo, u.telefono, r.nombre AS id_rol_fk, e.nombre AS id_estado_fk FROM Usuario u INNER JOIN rol r ON u.id_rol_fk = r.id_rol INNER JOIN estado e ON u.id_estado_fk = e.id_estado', []).then(res => {
    //variable para almacenar el resultado de la consulta
    let items: Usuario[]= [];
    //valido si trae al menos un registro
    if(res.rows.length > 0){
     //recorro mi resultado
      for(var i=0; i < res.rows.length; i++){
       //agrego los registros a mi lista
       items.push({
        id_usuario: res.rows.item(i).id_usuario,
        rut: res.rows.item(i).rut,
        nombreUsuario: res.rows.item(i).nombreusuario,
        nombreCompleto: res.rows.item(i).nombrecompleto,
        correo: res.rows.item(i).correo,
        telefono: res.rows.item(i).telefono,
        id_rol_fk: res.rows.item(i).id_rol_fk,
        id_estado_fk: res.rows.item(i).id_estado_fk,

        // dudas con el profesor
        contrasenia: '',
        fotousuario:''
       })
      }
    }
    //actualizar el observable
    this.listadoUsuario.next(items as any);})
  }

  cambiarRolUsu(id_usuario: string, id_rol_fk: string){
    return this.database.executeSql('UPDATE Usuario SET id_rol_fk = ? WHERE id_usuario = ?',[id_rol_fk,id_usuario]).then(res=>{
      this.Alerta("Rol","Rol cambiado");
      this.listarUsuario();
    }).catch(e=>{
      this.Alerta('Cambiar Rol', 'Error: ' + JSON.stringify(e));
    })
  }

  deshabilitarUsuario(id_estado_fk:string,id_usuario:string){
    return this.database.executeSql('UPDATE Usuario SET id_estado_fk = ? WHERE id_usuario = ?',[id_estado_fk,id_usuario]).then(res=>{
      this.Alerta("Usuario","Usuario Modificado");
      this.listarUsuario();
    }).catch(e=>{
      this.Alerta('Desactivar', 'Error: ' + JSON.stringify(e));
    })
  }

  buscarUsuario(rut:string){
    return this.database.executeSql('SELECT id_usuario, rut, nombreusuario, nombrecompleto, correo, telefono, id_rol_fk, id_estado_fk FROM Usuario WHERE rut = ?', [rut]).then(res => {
      //variable para almacenar el resultado de la consulta
      let items: Usuario[]= [];
      //valido si trae al menos un registro
      if(res.rows.length > 0){
       //recorro mi resultado
        for(var i=0; i < res.rows.length; i++){
         //agrego los registros a mi lista
         items.push({
          id_usuario: res.rows.item(i).id_usuario,
          rut: res.rows.item(i).rut,
          nombreUsuario: res.rows.item(i).nombreusuario,
          nombreCompleto: res.rows.item(i).nombrecompleto,
          correo: res.rows.item(i).correo,
          telefono: res.rows.item(i).telefono,
          id_rol_fk:res.rows.item(i).id_rol_fk,
          id_estado_fk: res.rows.item(i).id_estado_fk,

          // dudas con el profesor
          contrasenia: '',
          fotousuario: '',
         })
        }
      }
      //actualizar el observable
      this.listadoUsuario.next(items as any);})
  }

  ModificarUsuario(nombreusuario: String, nombrecompleto: String,  telefono: string, correo: String, fotousuario: any,id_usuario: number){
    return this.database.executeSql(
      'UPDATE Usuario SET nombreusuario = ?, nombrecompleto = ?, telefono = ?, correo = ?, fotousuario = ? WHERE id_usuario = ?',
      [nombreusuario, nombrecompleto, telefono, correo, fotousuario, id_usuario]
    ).then(res => {
      this.Alerta("Modificar", "Usuario modificado exitosamente.");
      this.listarUsuario();
    }).catch(e => {
      this.Alerta('Modificar', 'Error: ' + JSON.stringify(e));
    });
  }
  modificarContra(contrasenia: string, id_usuario: number){
    return this.database.executeSql(
      'UPDATE Usuario SET contrasenia = ? WHERE id_usuario = ?',
      [contrasenia, id_usuario]
    ).then(res => {
      this.listarUsuario();
    }).catch(e => {
      this.Alerta('Modificar', 'Error: ' + JSON.stringify(e));
    });
  }

  insertarUsuario(rut: String, nombreusuario: String, nombrecompleto: String, contrasenia: String, telefono: string, correo: String,fotousuario: string, id_rol_fk: number, id_estado_fk:string) {
    return this.database.executeSql(
      'INSERT INTO Usuario (rut, nombreusuario, nombrecompleto, contrasenia, telefono, correo,fotousuario, id_rol_fk,id_estado_fk) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?)', 
      [rut, nombreusuario, nombrecompleto, contrasenia, telefono, correo,fotousuario, id_rol_fk,id_estado_fk]
    ).then(res => {
      this.listarUsuario();
    }).catch(e => {
      this.Alerta('Agregar', 'Error: ' + JSON.stringify(e));
    });
  }

  IniciarSesion(usuario: string, contrasenia: string) {
    return this.database.executeSql(
      'SELECT * FROM Usuario WHERE nombreusuario = ? AND contrasenia = ?', [usuario, contrasenia]
    ).then(res => {
      if (res.rows.length > 0) {
        // Si las credenciales son correctas, retorna el usuario encontrado
        return res.rows.item(0);
      } else {
        // Si no hay coincidencias, retorna null
        return null;
      }
    }).catch(e => {
      this.Alerta('Usuario', 'Error: ' + JSON.stringify(e));
      return null;
    });
  }

  BuscarCorreoUsuario(usuario: string) {
    return this.database.executeSql(
      'SELECT id_usuario, correo, id_rol_fk, contrasenia, id_estado_fk FROM Usuario WHERE nombreusuario = ?', [usuario]
    ).then(res => {
      if (res.rows.length > 0) {
         // Si las credenciales son correctas, retorna el usuario encontrado
        return {
          id_usuario: res.rows.item(0).id_usuario,
          correo: res.rows.item(0).correo,
          id_rol_fk: res.rows.item(0).id_rol_fk,
          contrasenia: res.rows.item(0).contrasenia,
          id_estado_fk: res.rows.item(0).id_estado_fk,
        };
      } else {
        // Si no hay coincidencias, retorna null
        return null;
      }
    }).catch(e => {
      this.Alerta('Usuario', 'Error: ' + JSON.stringify(e));
      return null;
    });
  }
  //Metodo para ver si ya existe un nombre de usuario en la base de datos
  verificarUsuario(usuario: string) {
    return this.database.executeSql(
      'SELECT * FROM Usuario WHERE nombreusuario = ?', [usuario]
    ).then(res => {
      if (res.rows.length > 0) {
        // Si el usuario ya existe, retorna true
        return true;
      } else {
        // Si no hay coincidencias, retorna false
        return false;
      }
    }).catch(e => {
      this.Alerta('Usuario', 'Error: ' + JSON.stringify(e));
      return false; // En caso de error, retorna false
    });
  }

  verificarUsu(id_usuario: string){
    return this.database.executeSql(
      'SELECT * FROM Usuario WHERE id_usuario = ?', [id_usuario]
    ).then(res => {
      return res.rows.length > 0; // Retorna true si el usuario existe
    }).catch(e => {
      this.Alerta('Usuario', 'Error: ' + JSON.stringify(e));
      return false; // En caso de error, retorna false
    });
  }
  
  verificarCorreo(correo: string) {
    return this.database.executeSql(
      'SELECT * FROM Usuario WHERE correo = ?', [correo]
    ).then(res => {
      return res.rows.length > 0;
    }).catch(e => {
      this.Alerta('Correo', 'Error: ' + JSON.stringify(e));
      return false; // En caso de error, retorna false
    });
  }
  

  miPerfil(id_usuario: number){
    return this.database.executeSql(
      'SELECT * FROM Usuario WHERE id_usuario = ?', [id_usuario]
    ).then(res => {
      if (res.rows.length > 0) {
        // Si las credenciales son correctas, retorna el usuario encontrado
        return res.rows.item(0);
      } else {
        // Si no hay coincidencias, retorna null
        return null;
      }
    }).catch(e => {
      this.Alerta('Usuario', 'Error: ' + JSON.stringify(e));
      return null;
    });
  }

  // Funciones de mesa
  buscarMesa(id_ubi_fk: string) {
    return this.database.executeSql('SELECT m.id_mesa, m.nombre, m.c_sillas, u.nombre AS id_ubi_fk, e.nombre AS id_estado_fk FROM mesas m INNER JOIN ubicacion u ON m.id_ubi_fk = u.id_ubicacion INNER JOIN estado e ON m.id_estado_fk = e.id_estado WHERE m.id_ubi_fk = ?  ', [id_ubi_fk]).then(res => {
      //variable para almacenar el resultado de la consulta
      let items: Mesas[]= [];
      //valido si trae al menos un registro
      if(res.rows.length > 0){
      //recorro mi resultado
        for(var i=0; i < res.rows.length; i++){
        //agrego los registros a mi lista
          items.push({
            id_mesa: res.rows.item(i).id_mesa,
            nombre: res.rows.item(i).nombre,
            c_sillas: res.rows.item(i).c_sillas,
            id_ubi_fk: res.rows.item(i).id_ubi_fk,
            id_estado_fk: res.rows.item(i).id_estado_fk
          })
        }
      }
      //actualizar el observable
      this.listadoMesas.next(items as any);})
  }

  insertarMesa(nombre: string, c_sillas: string, id_ubi_fk: string) {
    return this.database.executeSql(
      'INSERT INTO mesas (nombre, c_sillas, id_ubi_fk) VALUES (?, ?, ?)', 
      [nombre, c_sillas, id_ubi_fk]
    ).then(res => {
      this.Alerta("Agregar", "Mesa agregada exitosamente.");
      this.buscarMesa(id_ubi_fk);
    }).catch(e => {
      this.Alerta('Agregar', 'Error: ' + JSON.stringify(e));
    });
  }

  existeMesa(nombre: string, id_ubi_fk: string) {
    return this.database.executeSql(
      'SELECT * FROM mesas WHERE nombre = ? AND id_ubi_fk = ?', [nombre,id_ubi_fk]
    ).then(res => {
      if (res.rows.length > 0) {
        // Si la mesa ya existe, retorna true
        return true;
      } else {
        // Si no hay coincidencias, retorna false
        return false;
      }
    }).catch(e => {
      this.Alerta('Mesa', 'Error: ' + JSON.stringify(e));
      return false; // En caso de error, retorna false
    });
  }

  deshabilitarMesa(id_estado_fk:string,id_mesa:string){
    return this.database.executeSql('UPDATE mesas SET id_estado_fk = ? WHERE id_mesa = ?',[id_estado_fk,id_mesa]).then(res=>{
      this.Alerta("Mesa","Mesa Modificada");
    }).catch(e=>{
      this.Alerta('Desactivar', 'Error: ' + JSON.stringify(e));
    })
  }
  modificarMesa(id_mesa:string, nombre:string, c_sillas: string, id_ubi_fk:string){
    return this.database.executeSql('UPDATE mesas SET nombre = ?, c_sillas = ?, id_ubi_fk = ? WHERE id_mesa = ?',[nombre,c_sillas, id_ubi_fk,id_mesa]).then(res=>{
      this.Alerta("Modificar","Mesa Modificada");
      this.buscarMesa(id_mesa);
    }).catch(e=>{
      this.Alerta('Modificar', 'Error: ' + JSON.stringify(e));
    })

  }

  ListarMesasDisponibles(id_ubi_fk: string, f_reserva: string, id_bloque: number){
    return this.database.executeSql("SELECT m.id_mesa, m.nombre, m.c_sillas, u.nombre AS id_ubi_fk FROM mesas m INNER JOIN ubicacion u ON m.id_ubi_fk = u.id_ubicacion WHERE m.id_ubi_fk = ? AND m.id_mesa NOT IN ( SELECT r.id_mesa_fk FROM reserva r WHERE CAST(r.f_reserva AS DATE) = CAST(? AS DATE) AND r.id_bloque_fk = ? AND r.id_estado_fk != 1);", [id_ubi_fk,f_reserva,id_bloque,]).then(res => {
      //variable para almacenar el resultado de la consulta
      let items: Mesas[]= [];
      //valido si trae al menos un registro
      if(res.rows.length > 0){
       //recorro mi resultado
        for(var i=0; i < res.rows.length; i++){
         //agrego los registros a mi lista
         items.push({
          id_mesa: res.rows.item(i).id_mesa,
          nombre: res.rows.item(i).nombre,
          c_sillas: res.rows.item(i).c_sillas,
          id_ubi_fk: res.rows.item(i).id_ubi_fk,
          id_estado_fk: res.rows.item(i).id_estado_fk,
         });
        }
      }
      //actualizar el observable
      return items;
   });
  }


  // RESERVAS

  listarReservas(){
      return this.database.executeSql("SELECT r.id_reserva, r.f_reserva, r.f_creacion, u.nombrecompleto AS id_usuario_fk, m.nombre ||' '|| ub.nombre ||' '|| m.c_sillas AS id_mesa_fk, b.h_inicio ||' - '|| b.h_fin AS id_bloque_fk, r.motivo, e.nombre AS id_estado_fk FROM reserva r INNER JOIN Usuario u ON r.id_usuario_fk = u.id_usuario INNER JOIN mesas m ON r.id_mesa_fk = m.id_mesa INNER JOIN bloque b ON r.id_bloque_fk = b.id_bloque INNER JOIN ubicacion ub ON m.id_ubi_fk = ub.id_ubicacion INNER JOIN estado e ON r.id_estado_fk = e.id_estado", []).then(res => {
        //variable para almacenar el resultado de la consulta
        let items: Reserva[]= [];
        //valido si trae al menos un registro
        if(res.rows.length > 0){
         //recorro mi resultado
          for(var i=0; i < res.rows.length; i++){
           //agrego los registros a mi lista
           items.push({
            id_reserva: res.rows.item(i).id_reserva,
            f_reserva: res.rows.item(i).f_reserva,
            f_creacion: res.rows.item(i).f_creacion,
            id_usuario_fk: res.rows.item(i).id_usuario_fk,
            id_mesa_fk: res.rows.item(i).id_mesa_fk,
            id_bloque_fk: res.rows.item(i).id_bloque_fk,
            motivo: res.rows.item(i).motivo,
            id_estado_fk: res.rows.item(i).id_estado_fk,
           })
          }
        }
        //actualizar el observable
        this.listadoReservas.next(items as any);})
  }
  listarReservasPorUsuario(id_usuario_fk: number) {
    return this.database.executeSql("SELECT r.id_reserva, r.f_reserva, r.f_creacion, u.nombrecompleto AS id_usuario_fk, m.nombre ||' '|| ub.nombre ||' '|| m.c_sillas AS id_mesa_fk, b.h_inicio ||' - '|| b.h_fin AS id_bloque_fk, r.motivo, e.nombre AS id_estado_fk  FROM reserva r INNER JOIN Usuario u ON r.id_usuario_fk = u.id_usuario INNER JOIN mesas m ON r.id_mesa_fk = m.id_mesa INNER JOIN bloque b ON r.id_bloque_fk = b.id_bloque INNER JOIN ubicacion ub ON m.id_ubi_fk = ub.id_ubicacion INNER JOIN estado e ON r.id_estado_fk = e.id_estado WHERE r.id_estado_fk = 2 AND id_usuario_fk = ?", [id_usuario_fk]).then(res => {
       //variable para almacenar el resultado de la consulta
       let items: Reserva[]= [];
       //valido si trae al menos un registro
       if(res.rows.length > 0){
        //recorro mi resultado
         for(var i=0; i < res.rows.length; i++){
          //agrego los registros a mi lista
          items.push({
           id_reserva: res.rows.item(i).id_reserva,
           f_reserva: res.rows.item(i).f_reserva,
           f_creacion: res.rows.item(i).f_creacion,
           id_usuario_fk: res.rows.item(i).id_usuario_fk,
           id_mesa_fk: res.rows.item(i).id_mesa_fk,
           id_bloque_fk: res.rows.item(i).id_bloque_fk,
           motivo: res.rows.item(i).motivo,
           id_estado_fk: res.rows.item(i).id_estado_fk,
          });
         }
       }
       //actualizar el observable
      this.listadoReservas.next(items as any);
    });
  }

  listarReservasPorUsuarioDesa(id_usuario_fk: number) {
    return this.database.executeSql("SELECT r.id_reserva, r.f_reserva, r.f_creacion, u.nombrecompleto AS id_usuario_fk, m.nombre ||' '|| ub.nombre ||' '|| m.c_sillas AS id_mesa_fk, b.h_inicio ||' - '|| b.h_fin AS id_bloque_fk, r.motivo, e.nombre AS id_estado_fk  FROM reserva r INNER JOIN Usuario u ON r.id_usuario_fk = u.id_usuario INNER JOIN mesas m ON r.id_mesa_fk = m.id_mesa INNER JOIN bloque b ON r.id_bloque_fk = b.id_bloque INNER JOIN ubicacion ub ON m.id_ubi_fk = ub.id_ubicacion INNER JOIN estado e ON r.id_estado_fk = e.id_estado WHERE r.id_estado_fk = 1 AND id_usuario_fk = ?", [id_usuario_fk]).then(res => {
       //variable para almacenar el resultado de la consulta
       let items: Reserva[]= [];
       //valido si trae al menos un registro
       if(res.rows.length > 0){
        //recorro mi resultado
         for(var i=0; i < res.rows.length; i++){
          //agrego los registros a mi lista
          items.push({
           id_reserva: res.rows.item(i).id_reserva,
           f_reserva: res.rows.item(i).f_reserva,
           f_creacion: res.rows.item(i).f_creacion,
           id_usuario_fk: res.rows.item(i).id_usuario_fk,
           id_mesa_fk: res.rows.item(i).id_mesa_fk,
           id_bloque_fk: res.rows.item(i).id_bloque_fk,
           motivo: res.rows.item(i).motivo,
           id_estado_fk: res.rows.item(i).id_estado_fk,
          });
         }
       }
       //actualizar el observable
      this.listadoReservas.next(items as any);
    });
  }

  DesactivarReservasPorUsuarioDesa(id_usuario: number, motivo: string){
    return this.database.executeSql("UPDATE reserva SET motivo = ?, id_estado_fk = 1 WHERE id_usuario_fk = ?", [motivo,id_usuario]).then(res => {
      //variable para almacenar el resultado de la consulta
      let items: Reserva[]= [];
      //valido si trae al menos un registro
      if(res.rows.length > 0){
       //recorro mi resultado
        for(var i=0; i < res.rows.length; i++){
         //agrego los registros a mi lista
         items.push({
          id_reserva: res.rows.item(i).id_reserva,
          f_reserva: res.rows.item(i).f_reserva,
          f_creacion: res.rows.item(i).f_creacion,
          id_usuario_fk: res.rows.item(i).id_usuario_fk,
          id_mesa_fk: res.rows.item(i).id_mesa_fk,
          id_bloque_fk: res.rows.item(i).id_bloque_fk,
          motivo: res.rows.item(i).motivo,
          id_estado_fk: res.rows.item(i).id_estado_fk,
         });
        }
      }
      //actualizar el observable
     this.listadoReservas.next(items as any);
   });  
  }

  DesactivarReservasPorMesaDesa(id_mesa_fk: number, motivo: string){
    return this.database.executeSql("UPDATE reserva SET motivo = ?, id_estado_fk = 1 WHERE id_mesa_fk = ?", [motivo,id_mesa_fk]).then(res => {
      //variable para almacenar el resultado de la consulta
      let items: Reserva[]= [];
      //valido si trae al menos un registro
      if(res.rows.length > 0){
       //recorro mi resultado
        for(var i=0; i < res.rows.length; i++){
         //agrego los registros a mi lista
         items.push({
          id_reserva: res.rows.item(i).id_reserva,
          f_reserva: res.rows.item(i).f_reserva,
          f_creacion: res.rows.item(i).f_creacion,
          id_usuario_fk: res.rows.item(i).id_usuario_fk,
          id_mesa_fk: res.rows.item(i).id_mesa_fk,
          id_bloque_fk: res.rows.item(i).id_bloque_fk,
          motivo: res.rows.item(i).motivo,
          id_estado_fk: res.rows.item(i).id_estado_fk,
         });
        }
      }
      //actualizar el observable
     this.listadoReservas.next(items as any);
   });  
  }

  insertarReserva(f_reserva:string, f_creacion: string, motivo:string, id_usuario_fk : number, id_mesa_fk: number, id_bloque_fk: number, id_estado_fk: string) {
    return this.database.executeSql(
      'INSERT INTO reserva (f_reserva, f_creacion, motivo, id_usuario_fk, id_mesa_fk, id_bloque_fk,id_estado_fk) VALUES ( ?, ?, ?, ?, ?, ?, ?)', 
      [f_reserva, f_creacion,motivo, id_usuario_fk, id_mesa_fk, id_bloque_fk,id_estado_fk]
    ).then(res => {
      this.Alerta("Agregar", "Reserva agregada exitosamente.");
      this.listarReservas();
    }).catch(e => {
      this.Alerta('Agregar', 'Error: ' + JSON.stringify(e));
    });
  }

  ModificarReserva(motivo:string, id_estado_fk:string, id_reserva:string){
    return this.database.executeSql('UPDATE reserva SET motivo = ?, id_estado_fk = ? WHERE id_reserva = ?',[motivo,id_estado_fk,id_reserva]).then(res=>{
      this.Alerta("Reserva","Reserva modificada exitosamente.");
      this.listarReservas();
    }).catch(e=>{
      this.Alerta('Reserva', 'Error: ' + JSON.stringify(e));
    })
  }

  // BLOQUES

  listarBloques(){
    return this.database.executeSql('SELECT * FROM bloque', []).then(res => {
      //variable para almacenar el resultado de la consulta
      let items: Bloque[]= [];
      //valido si trae al menos un registro
      if(res.rows.length > 0){
       //recorro mi resultado
        for(var i=0; i < res.rows.length; i++){
         //agrego los registros a mi lista
         items.push({
          id_bloque: res.rows.item(i).id_bloque,
          h_inicio: res.rows.item(i).h_inicio,
          h_fin: res.rows.item(i).h_fin
         })
        }
      }
      //actualizar el observable
      this.listadoBloque.next(items as any);})
}


 
  
}