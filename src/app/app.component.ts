import { Cliente } from './../models/cliente/cliente.model';

import { AngularFireAuth,  } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { UserProvider } from '../providers/user/user';
import { TreinoPage } from '../pages/treino/treino';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  cliente : Cliente;
  status: string;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              afAuth: AngularFireAuth, prov: UserProvider) {

    const authObserver = afAuth.authState.subscribe( users => {
        if(users){
          console.log("entrou no users");
          prov.getUserData(afAuth.auth.currentUser.uid).subscribe(data =>{ this.cliente = data});
          console.log("clientes/" + afAuth.auth.currentUser.uid);
          console.log("cliente -> " + this.cliente);
          switch(this.cliente.status) {
            case 10: {
              this.rootPage = TreinoPage;
              authObserver.unsubscribe();
               break;
            }
            case 20: {
              this.rootPage = TreinoPage;
              authObserver.unsubscribe();
               break;
            }
            case 30: {
              this.rootPage = TreinoPage;
              authObserver.unsubscribe();
              break;
            }
            case 40: {
              this.rootPage = TreinoPage;
              authObserver.unsubscribe();
              break;
            }
            case 90: {
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
