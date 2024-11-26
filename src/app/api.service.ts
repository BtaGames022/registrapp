import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

    // Obtener usuarios (alumnos)
    getUsuarios(): Observable<any[]> {
      return this.http.get<any[]>(`${this.apiUrl}/usuario`);
    }
    // crear usuarios(alumnos)
    createUsuario(usuario: any): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/usuario`, usuario);
    }

    // Actualizar un usuario existente
    updateUsuario(id: number, usuario: any): Observable<any> {
      return this.http.put<any>(`${this.apiUrl}/usuario/${id}`, usuario);
    }
    //borrar un usuario existente
    deleteUsuario(id: number): Observable<any> {
      return this.http.delete<any>(`${this.apiUrl}/usuario/${id}`);
    }

    // Obtener profesores
    getProfesores(): Observable<any[]> {
      return this.http.get<any[]>(`${this.apiUrl}/profesores`);
    }
    //crear profesores
    createProfesor(profesores: any): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/profesores`, profesores);
    }

    // Actualizar un profesor existente
    updateProfesores(id: number, profesores: any): Observable<any> {
      return this.http.put<any>(`${this.apiUrl}/profesores/${id}`, profesores);
    }
    // borrar un profesor existente
    deleteProfesores(id: number): Observable<any> {
      return this.http.delete<any>(`${this.apiUrl}/profesores/${id}`);
    }

  // Login para usuario, profesor y admin
  login(correo: string, password: string): Observable<any> {
    // Verificar usuarios
    const usuario$ = this.http.get<any[]>(`${this.apiUrl}/usuario`).pipe(
      map((usuarios) =>
        usuarios.find((u) => u.correo === correo && u.password === password)
      )
    );

    // Verificar profesores
    const profesor$ = this.http.get<any[]>(`${this.apiUrl}/profesores`).pipe(
      map((profesores) =>
        profesores.find((p) => p.correo === correo && p.password === password)
      )
    );

    // Verificar admin
    const admin$ = this.http.get<any[]>(`${this.apiUrl}/Admin`).pipe(
      map((admins) =>
        admins.find((a) => a.correo === correo && a.password === password)
      )
    );

    // Retornar el rol correspondiente
    return forkJoin([usuario$, profesor$, admin$]).pipe(
      map(([usuario, profesor, admin]) => {
        if (usuario) return { role: 'alumno', data: usuario };
        if (profesor) return { role: 'profesor', data: profesor };
        if (admin) return { role: 'admin', data: admin };
        return null; // Credenciales incorrectas
      })
    );
  }
    


}
