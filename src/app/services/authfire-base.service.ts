import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { ServicioBDService } from 'src/app/services/servicio-bd.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthfireBaseService {
  
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*'
    })
  }
  private apiUrl = 'https://openexchangerates.org/api/latest.json?app_id=4ac0b15502bf4e969e92ab022061d130'



  constructor(private AFauth: AngularFireAuth, private bd : ServicioBDService, private http: HttpClient,private functions: AngularFireFunctions) { }


  inicioSesion(nombreUsuario: string, contrasenia: string) {
    return this.bd.BuscarCorreoUsuario(nombreUsuario)
      .then(usuarioInfo => {
        if (usuarioInfo && usuarioInfo.correo) {
          // Usamos Firebase para iniciar sesión con el correo y la contraseña
          return this.AFauth.signInWithEmailAndPassword(usuarioInfo.correo, contrasenia);
        } else {
          throw new Error('No se encontró el correo del usuario');
        }
      })
      .catch(error => {
        return null;
      });
  }

  eliminarUsuario(uid: string){
    return this.AFauth.currentUser.then(user => {
      if (user) {
        // Requiere que el usuario esté autenticado
        return user.delete();
      } else {
        return null;
      }
    });
  }
  
  registro(correo: string, contrasenia: string){ 
    return this.AFauth.createUserWithEmailAndPassword(correo, contrasenia);
  }

  resetContra(email: string){
    
    return this.AFauth.sendPasswordResetEmail(email);
  }

  // ------------------------------ API CONVERSORA DE MONEDAS ------------------------------------------------------

  obtenerValorMoneda(MonedaBase: string): Observable<any> {
    const url = `https://api.exchangerate-api.com/v4/latest/${MonedaBase}`; 
    return this.http.get(url)
  }

}
