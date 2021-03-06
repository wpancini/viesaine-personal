import { ExercicioPage } from './../exercicio/exercicio';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { DomSanitizer } from "@angular/platform-browser";

@IonicPage()
@Component({
  selector: 'page-treino',
  templateUrl: 'treino.html',
})
export class TreinoPage {
  videoTreino1 = "https://www.youtube.com/embed/HgJ33r0qWf8";
  safeUrl: any;

  treino: any[]=  [ {'exercicio':'Aquecimento','tempo':'15min','quantidade':'0','repetiçao':'1 vez(es)'},
                    {'exercicio':'Polichinelo','tempo':'0min','quantidade':'20','repetiçao':'3 vez(es)'},
                    {'exercicio':'Abdominal','tempo':'1 min','quantidade':'0','repetiçao':'2 vez(es)'},
                    {'exercicio':'Mergulho no Banco','tempo':'0','quantidade':'10','repetiçao':'2 vez(es)'},
                    {'exercicio':'Pular corda','tempo':'15min','quantidade':'0','repetiçao':'1 vez(es)'},
                    {'exercicio':'Flexão de Braço','tempo':'15min','quantidade':'0','repetiçao':'1 vez(es)'},
                    {'exercicio':'Aquecimento','tempo':'15min','quantidade':'0','repetiçao':'1 vez(es)'},

  ]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private fire: AngularFireAuth,
    private sanitizer: DomSanitizer) {
      this.sanitizer = sanitizer;
  }


  ngOnInit() {
    this.getVideoUrl(this.videoTreino1);
  }

  getVideoUrl(vid){
    return this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(vid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TreinoPage');
  }
  exercicio(){
    this.navCtrl.push(ExercicioPage);
  }

  logout(){

    this.fire.auth.signOut();
    this.navCtrl.setRoot(HomePage);
  }
}
