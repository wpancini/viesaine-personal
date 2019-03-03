import { AnamnesePage } from './../anamnese/anamnese';

import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Users } from '../profile/user';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { RecuperarPage } from '../recuperar/recuperar';
import { TreinoPage } from './../treino/treino';
import { RegisterPage } from '../register/register';
import { ProfilePage } from './../profile/profile';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: Users = new Users();

  @ViewChild('usuario') email;
  @ViewChild('senha') password;

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController,
              public fire: AngularFireAuth
    ) {

  }
  entrar(){
    //this.navCtrl.push(AnamnesePage);
    let toast = this.toastCtrl.create({duration: 2000, position: 'botton'});
    this.fire.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
    .then(data => {

      this.users.email = this.email.value;
      this.users.senha = this.password.value;

      this.navCtrl.setRoot(TreinoPage);

    })
    .catch((error: any) => {
        if(error.code == 'auth/user-disabled'){
          toast.setMessage('Usuário foi desabilitado!');
        }
        else if(error.code == 'auth/invalid-email'){
          toast.setMessage('o email digitado é inválido!');
        }
        else if(error.code == 'auth/user-not-found'){
          toast.setMessage('Usuário não encontrado!');
        }
        else if(error.code == 'auth/wrong-password'){
          toast.setMessage('Senha errada');
        }
        toast.present();
    })
  }
  cadastrar(){
    this.navCtrl.push(RegisterPage);
  }
  recuperar(){
    this.navCtrl.push(RecuperarPage);
  }
  loginWithFacebook(){

    this.fire.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider())
    .then( res => {

      //console.log(res);
      this.navCtrl.setRoot(ProfilePage);

    })
  }
  loginVisitante(){
    let toast = this.toastCtrl.create({duration: 2000, position: 'botton'});
    this.fire.auth.signInAnonymously()
    .then(data => {

      console.log('data anonimo', data);
        this.navCtrl.setRoot(ProfilePage);
    })
    .catch((error: any) => {
      if(error.code == 'auth/operation-not-allowed'){
        toast.setMessage('O modo visitante está desabilitado');
      }else{
        console.log('Error => ', error);
      }
      toast.present();
    })

  }
}
