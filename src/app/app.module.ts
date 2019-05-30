
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RecuperarPage } from '../pages/recuperar/recuperar';
import { RegisterPage } from '../pages/register/register';
import { TreinoPage } from './../pages/treino/treino';
import { ExercicioPage } from '../pages/exercicio/exercicio';
import { AnamnesePage } from './../pages/anamnese/anamnese';
import { ProfilePage } from './../pages/profile/profile';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { UserProvider } from '../providers/user/user';

const FirebaseAuth = {
  apiKey: "AIzaSyDt-TSLiLJn7oqoLQC5BQWMdMsbQIttRjs",
  authDomain: "viesaine-aca99.firebaseapp.com",
  databaseURL: "https://viesaine-aca99.firebaseio.com",
  projectId: "viesaine-aca99",
  storageBucket: "viesaine-aca99.appspot.com",
  messagingSenderId: "39397387940"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    RecuperarPage,
    RegisterPage,
    TreinoPage,
    ExercicioPage,
    AnamnesePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(FirebaseAuth),
    AngularFireDatabaseModule,
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    RecuperarPage,
    RegisterPage,
    TreinoPage,
    ExercicioPage,
    AnamnesePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider
  ]
})
export class AppModule {}
