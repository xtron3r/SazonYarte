import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuntentificarContraService {
  private apiUrl = '';
  private apiKey = '';  // Reemplaza con tu API key

  constructor(private http: HttpClient) {}

  recoverPassword(email: string): Observable<any> {
    const resetToken = this.generateResetToken(); // Generar un token de recuperación (puedes personalizarlo)
    
    const emailData = {
      personalizations: [
        {
          to: [{ email: email }],
          subject: 'Recuperación de contraseña'
        }
      ],
      from: { email: '' }, // Cambia esto por tu dirección de correo
      content: [
        {
          type: 'text/plain',
          value: `Utiliza este código para recuperar tu contraseña: ${resetToken}`
        }
      ]
    };

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    });

    return this.http.post(this.apiUrl, emailData, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  private generateResetToken(): string {
    // Genera un token de recuperación (esto es solo un ejemplo)
    return Math.random().toString(36).substring(2, 15);
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Error desconocido';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Código de error: ${error.status}\nMensaje: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
