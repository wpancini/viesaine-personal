import { Cliente } from './../../models/cliente/cliente.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

  getUserData(uid: string){
    console.log("URL -> " + "https://viesaine-aca99.firebaseio.com/clientes/" + uid + ".json");
    return this.http.get<Cliente>("https://viesaine-aca99.firebaseio.com/clientes/" + uid + ".json");
  }


}
