import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-pag-admin',
  templateUrl: './pag-admin.page.html',
  styleUrls: ['./pag-admin.page.scss'],
})
export class PagAdminPage implements OnInit {

  usuarios: any[] = [];
  profesores: any[] = [];

  constructor(private router:Router, private apiService: ApiService ) { }

  ngOnInit() {
    this.loadUsuarios();
    this.loadProfesores();
  }

  // Cargar usuarios
  loadUsuarios() {
    this.apiService.getUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }

  // Cargar profesores
  loadProfesores() {
    this.apiService.getProfesores().subscribe((data) => {
      this.profesores = data;
    });
  }

  // Eliminar un usuario
deleteUsuario(id: number) {
  this.apiService.deleteUsuario(id).subscribe(() => {
    this.loadUsuarios(); // Recargar lista de usuarios
  });
}

// Editar un usuario (redirigir a página de edición, opcional)
editUsuario(id: number) {
  console.log(`Editar usuario con ID: ${id}`);
}

// Eliminar un profesor (deberás implementar un método similar en ApiService)
deleteProfesor(id: number) {
  console.log(`Eliminar profesor con ID: ${id}`);
}

// Editar un profesor (redirigir a página de edición, opcional)
editProfesor(id: number) {
  console.log(`Editar profesor con ID: ${id}`);
}


  goBack() {
    this.router.navigate(['login']);
  }
}
