import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: Http) {
    console.log('Hello UserProvider Provider');
  }

  getUserData(uid: string){
    return this.http.get("https://viesaine-aca99.firebaseio.com/clientes" + uid + ".json")
                    .map(res => res.json());
  }


}
