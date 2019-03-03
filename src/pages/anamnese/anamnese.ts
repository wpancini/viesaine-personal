import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-anamnese',
  templateUrl: 'anamnese.html',
})
export class AnamnesePage {
// variaveis auxiliares
  questoes: number = 22;
  questao: number = 21;
  btnAnterior: boolean = true;
  btnProximo: boolean = false;
  flagDiabetes: boolean = false;
  flagEnviar: boolean = false;
  // variáveis da anamnese
  q1Resp: string;
  q2Resp: number = 1;
  q3Resp1: number; q3Resp2: number; q3Resp3: number; //q3Resp1 - Peso  q3Resp2 - Altura q3Resp3 - Freq. Cardíaca
  q4Resp: string;
  q5Resp: string;
  q6Resp: string; q6RespCompl: string;
  q7Resp1: string; q7Resp2: string; q7Resp3: string; q7RespCompl: string;
  q8Resp: string;
  q9Resp: string;
  q10Resp: string;
  q11Resp: string; q11RespCompl1: string; q11RespCompl2: string;
  q12Resp: string; q12RespCompl: string;
  q13Resp: string; q13RespCompl: string;
  q14Resp: string; q14RespCompl: string;
  q15Resp: string; q15RespCompl: string;
  q16Resp: string; q16RespCompl: string;
  q17Resp: string; q17RespCompl: string;
  q18Resp: string; q18RespCompl: string;
  q19Resp: string; q19RespCompl: string;
  q20Resp: string; q20RespCompl: string;
  q21Resp: string; q21RespCompl: string;
  q22Resp: string; q22RespCompl: string;


  constructor(public navCtrl: NavController,public navParams: NavParams,public alertCtrl: AlertController) {
  }

  validaResposta(){

    switch(this.questao){
      case 1: {
        //statements;
        if(this.q1Resp == null || this.q1Resp.length < 10){
          this.mostraAlert('Informe qual o seu Objetivo para treinar.');
        } else{
          this.next();
        }
        break;

      }
      case 2: {
      //statements;
         this.next();
         break;
      }
      case 3: {
        //statements;
        if(this.q3Resp1 == null || this.q3Resp1 == 0){
          this.mostraAlert('Informe o seu Peso');
          break;
        } else if(this.q3Resp2 == null || this.q3Resp2 == 0){
          this.mostraAlert('Informe a sua Altura');
          break;
        }else if(this.q3Resp3 == null || this.q3Resp3 == 0){
          this.mostraAlert('Informe a sua Frequencia Cardíaca');
          break;
        }else{
          this.next();
        }
        break;
      }
      case 4: {
        //statements;
        if(this.q4Resp == null){
          this.mostraAlert('Selecione uma das opções.');
        }else{
          this.next();
        }
        break;
      }
      case 5: {
        //statements;
        if(this.q5Resp == null){
          this.mostraAlert('Selecione uma das opções.');
        }else{
          this.next();
        }
        break;
      }
      case 6: {
        //statements;
        if(this.q6Resp == null){
          this.mostraAlert('Selecione uma das opções.');
          break;
        }else if(this.q6Resp == 'sim' ){
          if(this.q6RespCompl == null || this.q6RespCompl.length < 3){
            this.mostraAlert('Informe ao menos quanto tempo pratica atividade física.');
            break;
          }
        }
        this.next();
        break;
      }
      case 7: {
        //statements;
        this.next();
        break;
      }
      case 8: {
        //statements;
        if(this.q8Resp == null){
          this.mostraAlert('Selecione uma das opções.');
        }else{
          this.next();
        }
        break;
      }
      case 9: {
        //statements;
        if(this.q9Resp == null){
          this.mostraAlert('Selecione uma das opções.');
        }else{
          this.next();
        }
        break;
      }
      case 10: {
        //statements;
        if(this.q10Resp == null){
          this.mostraAlert('Selecione uma das opções.');
        }else{
          this.next();
        }
        break;
      }
      case 11: {
        //statements;
        if(this.q11Resp == null){
          this.mostraAlert('Selecione uma das opções.');
        }else if(this.flagDiabetes){
          if(this.q11RespCompl1 == null){
            this.mostraAlert('Selecione qual o tipo da Diabetes.');
            break;
          }else if(this.q11RespCompl2 == null){
            this.mostraAlert('Selecione se usa Medicamento.');
            break;
          }
        }
        this.next();
        break;
      }
      case 12: {
        //statements;
        if(this.q12Resp == null){
          this.mostraAlert('Selecione uma das opções.');
          break;
        }else if(this.q12Resp == 'sim' ){
          if(this.q12RespCompl == null || this.q12RespCompl.length < 3){
            this.mostraAlert('Informe qual a alteração cardíaca você possui.');
            break;
          }
        }
        this.next();
        break;
      }
      case 13: {
        //statements;
        if(this.q13Resp == null){
          this.mostraAlert('Selecione uma das opções.');
          break;
        }else if(this.q13Resp == 'sim' ){
          if(this.q13RespCompl == null || this.q13RespCompl.length < 3){
            this.mostraAlert('Informe qual o parente que possui problema cardíaco.');
            break;
          }
        }
        this.next();
        break;
      }
      case 14: {
        //statements;
        if(this.q14Resp == null){
          this.mostraAlert('Selecione uma das opções.');
          break;
        }else if(this.q14Resp == 'sim' ){
          if(this.q14RespCompl == null || this.q14RespCompl.length < 3){
            this.mostraAlert('Informe qual problema respiratório você possui.');
            break;
          }
        }
        this.next();
        break;
      }
      case 15: {
        //statements;
        if(this.q15Resp == null){
          this.mostraAlert('Selecione uma das opções.');
          break;
        }else if(this.q15Resp == 'sim' ){
          if(this.q15RespCompl == null || this.q15RespCompl.length < 3){
            this.mostraAlert('Informe qual remédio ou droga você faz uso.');
            break;
          }
        }
        this.next();
        break;
      }
      case 16: {
        //statements;
        if(this.q16Resp == null){
          this.mostraAlert('Selecione uma das opções.');
          break;
        }else if(this.q16Resp == 'sim' ){
          if(this.q16RespCompl == null || this.q14RespCompl.length < 3){
            this.mostraAlert('Informe qual o tipo de esteróide você faz uso.');
            break;
          }
        }
        this.next();
        break;
      }
      case 17: {
        //statements;
        if(this.q17Resp == null){
          this.mostraAlert('Selecione uma das opções.');
          break;
        }else if(this.q17Resp == 'sim' ){
          if(this.q17RespCompl == null || this.q17RespCompl.length < 3){
            this.mostraAlert('Informe qual o tipo de alergia você possui.');
            break;
          }
        }
        this.next();
        break;
      }
      case 18: {
        //statements;
        if(this.q18Resp == null){
          this.mostraAlert('Selecione uma das opções.');
          break;
        }else if(this.q18Resp == 'sim' ){
          if(this.q18RespCompl == null || this.q18RespCompl.length < 3){
            this.mostraAlert('Informe qual cirurgia você realizou.');
            break;
          }
        }
        this.next();
        break;
      }
      case 19: {
        //statements;
        this.next();
        break;
      }
      case 20: {
        //statements;
        if(this.q20Resp == null){
          this.mostraAlert('Selecione uma das opções.');
          break;
        }else if(this.q20Resp == 'sim' ){
          if(this.q20RespCompl == null || this.q20RespCompl.length < 3){
            this.mostraAlert('Informe qual cirurgia você realizou.');
            break;
          }
        }
        this.next();
        break;
      }
      case 21: {
        //statements;
        if(this.q21Resp == null){
          this.mostraAlert('Selecione uma das opções.');
          break;
        }else if(this.q21Resp == 'sim' ){
          if(this.q21RespCompl == null || this.q21RespCompl.length < 3){
            this.mostraAlert('Informe qual restrição ou recomendação médica.');
            break;
          }
        }
        this.next();
        break;
      }
      case 22: {
        //statements;
        if(this.q22Resp == null){
          this.mostraAlert('Selecione uma das opções.');
          break;
        }else if(this.q22Resp == 'sim' ){
          if(this.q22RespCompl == null || this.q22RespCompl.length < 3){
            this.mostraAlert('Informe qual teste você realizou.');
            break;
          }
        }
        this.next();
        break;
      }
    }
  }
  next(){
    this.questao = ++this.questao;
//    if(this.questao > this.questoes){
//      this.btnProximo = true;
//    }
//    this.btnAnterior = false;
  }
  previous(){
    this.questao = --this.questao;
    if(this.questao ==1){
        this.btnAnterior = true;
    }
    this.btnProximo = false;
  }
  mostraAlert(mensagem: string){
    this.alertCtrl.config;
    let alerta = this.alertCtrl.create({title: 'Aviso!', subTitle: mensagem, buttons: ['Ok'], cssClass: 'alert'});
    alerta.setCssClass
    alerta.present();
  }
  validaDiabetes(){
    if( this.q11Resp == 'sim'){
      this.flagDiabetes = true;
    }else{
      this.flagDiabetes = false;
      this.q11RespCompl1 = null;
      this.q11RespCompl2 = null;
    }
  }
  enviarAnamnese(){

  }
  cancelarAnamnese(){

  }
}
