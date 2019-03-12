import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutosProvider } from '../../providers/produtos/produtos';

/**
 * Generated class for the ProdutosShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produtos-show',
  templateUrl: 'produtos-show.html',
})
export class ProdutosShowPage {

  produtos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public produtosProvider: ProdutosProvider) {
      this.getProdutos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutosShowPage');
    this.getProdutos();
  }

  getProdutos() {
    this.produtosProvider.findAll()
    .then(data => {
      this.produtos = data;
      console.log(this.produtos);
    });
  }

}
