import { Component, OnInit } from '@angular/core';
import { NumericValueAccessor, ToastController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { state } from '@angular/animations';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
    email: string = "";
    password: string = "";
  

  constructor(public toastController: ToastController, private router:Router, private navCtrl: NavController, private apiService: ApiService ) { }

  goBack() {
    this.router.navigate(['home']);
  }

  goRecu(){
    this.router.navigate(['recuperar'])
  }

  ngOnInit() {
  }

  validarUsuario(dato:String){
    if(dato.length>=3 && dato.length<=8){
      return true
    }
    return false;
  }

  validarPassword(dato:String){
    if(dato.length>=8 && dato.length<=15 ){
      return true
    }
    return false;
  }



  login() {
    if (!this.email || !this.password) {
      alert('Por favor, ingresa tu correo y contraseña.');
      return;
    }

    this.apiService.login(this.email, this.password).subscribe((response) => {
      if (response) {
        if (response.role === 'alumno') {
          this.router.navigate(['/alumno']); // Redirigir a la página de alumnos
        } else if (response.role === 'profesor') {
          this.router.navigate(['/profesor']); // Redirigir a la página de profesores
        } else if (response.role === 'admin') {
          this.router.navigate(['/admin']); // Redirigir a la página de admin
        }
      } else {
        alert('Credenciales incorrectas. Por favor, verifica tu correo y contraseña.');
      }
    });
  }


}
