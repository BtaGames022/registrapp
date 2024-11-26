import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
  showImage = true;


  constructor( private router:Router,public navCtrl: NavController) { }

  cerrarSesion() {
    localStorage.removeItem('Bienvenido');
    this.navCtrl.navigateRoot('login'); // o la ruta donde quieras redirigir al usuario
  }
  goIniciar(){
    this.router.navigate(['login'])
  }
  Alumno() {
    this.router.navigate(['alumno']);
  }
  Profesor() {
    this.router.navigate(['profesor']);
  }

  



}
