import { Cliente } from './../models/cliente/cliente.model';

import { AngularFireAuth,  } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TreinoPage } from './../pages/treino/treino';
import { AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from '../pages/home/home';
import { Observable } from 'rxjs/Observable';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  cliente: Cliente;
  clientes: Observable<any[]>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              afAuth: AngularFireAuth, db: AngularFireDatabase) {

    const authObserver = afAuth.authState.subscribe( users => {
        if(users){

          console.log("entrou no users");
          this.clientes = db.list("clientes/" + afAuth.auth.currentUser.uid).valueChanges();
          console.log("clientes: -> " + this.clientes);
          this.cliente = this.clientes[0];
            console.log("cliente = " + this.cliente);
          switch(this.cliente.status) {
            case 10: {
              console.log("status = " + this.cliente.status);
              this.rootPage = TreinoPage;
              authObserver.unsubscribe();
               break;
            }
            case 20: {
              console.log("status = " + this.cliente.status);
              this.rootPage = TreinoPage;
              authObserver.unsubscribe();
               break;
            }
            case 30: {
              console.log("status = " + this.cliente.status);
              this.rootPage = TreinoPage;
              authObserver.unsubscribe();
              break;
            }
            case 40: {
              console.log("status = " + this.cliente.status);
              this.rootPage = TreinoPage;
              authObserver.unsubscribe();
              break;
            }
            case 90: {
              console.log("status = " + this.cliente.status);
              this.rootPage = TreinoPage;
              authObserver.unsubscribe();
              break;
            }
            case 99: {
              this.rootPage = TreinoPage;
              authObserver.unsubscribe();
              break;
            }
            default: {
              this.rootPage = TreinoPage;
              authObserver.unsubscribe();
               break;
            }
         }
        }else{
          this.rootPage = HomePage;
          authObserver.unsubscribe();
        }
    })

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

