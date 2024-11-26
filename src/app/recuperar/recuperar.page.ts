import { Component, OnInit} from '@angular/core';
import { NumericValueAccessor, ToastController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { state } from '@angular/animations';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage{


  recuperar:any={
    Usuario:""
  }

  field:string="";


  constructor(public toastController: ToastController, private router:Router, private navCtrl: NavController) { }


  goIniciar() {
    this.router.navigate(['login']);
  }

  goInicio() {
    this.router.navigate(['home']);
  }

  validarUsuario(dato:String){
    if(dato.length>=3 && dato.length<=30){
      return true
    }
    return false;
  }

  validateModel(model:any){
    for (var [key, value] of Object.entries(model)){
      if(value=="") {
        this.field=key;
        return false;
      }
    }
    return true;
  }

  recupera(){
    if(this.validateModel(this.recuperar)){
      if(this.validarUsuario(this.recuperar.Usuario)){
        this.presentToast("Recuperada la cuenta de "+this.recuperar.Usuario);
          let NavigationExtras:NavigationExtras={
            state:{user:this.recuperar.Usuario}
          }
          this.router.navigate(['not-found'],NavigationExtras);

      }else{
        this.presentToast("El largo del nombre de usuario debe ser un minimo de 3 y maximo de 30 caracteres");
        this.recuperar.Usuario="";
      }
    }

  }

  async presentToast(message:string, duration?:number){
    const toast = await this.toastController.create(
      {
        message:message,
        duration:duration?duration:2000
      }
    );
    toast.present();
  }


    
  

}



