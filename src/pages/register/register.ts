import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PasswordValidator } from '../../validators/password.validator';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import isValidCpf from '@brazilian-utils/is-valid-cpf';

import { Cliente } from './../../models/cliente/cliente.model';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  cliente: Cliente = new Cliente();
  senha: string;
  validations_form: FormGroup;
  matching_passwords_group: FormGroup;

  mostarnome: string = this.cliente.nome + " " + this.cliente.sobrenome;
  usuariologado: any;
  dadosGeral: number = 3;
  dados: number = 0;
  flagEnviar: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public fire: AngularFireAuth,
              public db: AngularFireDatabase,
              public toastCtrl: ToastController,
              public formBuilder: FormBuilder){
  }

  ionViewWillLoad() {
    this.matching_passwords_group = new FormGroup({
      senha: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      confirma_senha: new FormControl('', Validators.required)
    }, (formGroup: FormGroup) => {
      //console.log("******1");
      return PasswordValidator.areEqual(formGroup);
    });
    this.validations_form = this.formBuilder.group({
      matching_passwords: this.matching_passwords_group,
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      nome: new FormControl('', Validators.required),
      sobrenome: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.compose([
        Validators.maxLength(11),
        Validators.minLength(11),
        Validators.pattern('[0-9]'),
        Validators.required
      ])),
      nascimento: new FormControl('',Validators.required),
      logradouro: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]')
      ])),
      numero: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]')
      ])),
      complemento: new FormControl(''),
      bairro: new FormControl('', Validators.required),
      cidade: new FormControl('', Validators.required),
      uf: new FormControl('', Validators.required)
    });
  }

  validation_messages = {
    'nome': [
      { type: 'required', message: 'Nome é obrigatório.' }
    ],
    'sobrenome': [
      { type: 'required', message: 'Sobrenome é obrigatório.' }
    ],
    'email': [
      { type: 'required', message: 'Email é obrigatório.' },
      { type: 'pattern', message: 'Entre com e-mail válido.' }
    ],
    'senha': [
      { type: 'required', message: 'Senha é obrigatória.' },
      { type: 'minlength', message: 'Senha deve ter no mínimo 5 caracteres.' },
      { type: 'pattern', message: 'A Senha deve conter ao menos um caracter maiúsculo , um caracter minúsculo, e um número.' }
    ],
    'confirma_senha': [
      { type: 'required', message: 'Confirmar Senha é obrigatória' }
    ],
    'cpf': [
      { type: 'required', message: 'CPF é obrigatório.' },
      { type: 'pattern', message: 'CPF inválido.' }
    ],
    'matching_passwords': [
      { type: 'areEqual', message: 'Senha não confere' }
    ]
//    'terms': [
//      { type: 'pattern', message: 'You must accept terms and conditions.' }
//    ],
  }
  registrar(){
    let toast = this.toastCtrl.create({duration: 2000, position:'botton'});
    // cria usuario no Firebase
    this.fire.auth.createUserWithEmailAndPassword(this.cliente.email, this.senha)
    .then(data => {
          // faz login com email e senha cadastrados
          this.fire.auth.signInWithEmailAndPassword(this.cliente.email, this.senha)
          .then(data => {
            //console.log("1 - registrou usuario");
            //atualiza profile no Firebase com o Nome
            this.fire.auth.currentUser.updateProfile({displayName: this.mostarnome,photoURL: null
            })
            .then(data =>{
              //console.log("2 - atualizou o profile");
              // grava dados do cliente no firebase db
              this.db.database.ref("clientes/" + this.fire.auth.currentUser.uid).set(this.cliente);
            })
            .catch((error: any)=>{
              toast.setMessage('Problema na atualização do Profile!');
              toast.present();
            });
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
          });
    })
    .catch((error: any)=>{
         if(error.code == 'auth/email-already-in-use'){
           toast.setMessage('O email digitado já está em uso');
         }
         else if(error.code == 'auth/invalid-email'){
           toast.setMessage('O email digitado é inválido');
         }
         else if(error.code == 'auth/operation-not-allowed'){
           toast.setMessage('Não está habilitado a criação de usuários');
         }
         else if(error.code == 'auth/weak-password'){
           toast.setMessage('A senha digitada é fraca');
         }
         toast.present();
    });
  }
  validaCpf(){
    if(this.cliente.cpf != null){
      return isValidCpf(this.cliente.cpf);
    }else{
      return true;
    }
  }
  previous(){
    if(this.dados > 0)
    this.dados = --this.dados;
  }
  validaResposta(){
    this.dados = ++this.dados;
    if(this.dados == this.dadosGeral){
      this.flagEnviar = true;
    }
  }
  onSubmit(){
  }
}
