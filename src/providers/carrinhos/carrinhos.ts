import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CarrinhosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CarrinhosProvider {

  apiUrl = 'http://localhost:8080/api/carrinhos/';
  produtos: any;
  headers: {'Access-Control-Allow-Origin': '*', 'Accept':'application/json','Content-Type': 'application/json', 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT'};

  constructor(public http: HttpClient) {
    console.log('Hello CarrinhosProvider Provider');
  }
  findAll() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl)
      .subscribe(data => {
        resolve(data);
        console.log('The result is:');
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  findById(id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+id)
      .subscribe(data => {
        resolve(data);
        console.log('The result is:');
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  deleteById(id) {
    return new Promise(resolve => {
      this.http.delete(this.apiUrl+id, { headers: { 'Access-Control-Allow-Origin': '*'}})
      .subscribe(data => {
        resolve(data);
        console.log('The result is:');
        console.log(data);
      }, err => {
        console.log(err);
      });
    });

  }

  save(carrinho) {
    let data = JSON.stringify(carrinho);
    return new Promise((resolve, reject) => { 
      this.http.post(this.apiUrl, data, { headers: { 'Content-Type': 'application/json'}})
      .subscribe(res => {
        resolve(res);
        console.log('The result is:'+res);
        console.log(carrinho);
      }, (err) => {
        reject(err);
        console.log(err);
      });
    });
  }

}

export class Carrinho {
  id: number;
  descricao: string;
  subtotal: number;
  compra_aprovada: boolean;
}
