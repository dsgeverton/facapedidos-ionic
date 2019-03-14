import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ProdutosProvider } from '../../providers/produtos/produtos';
import { CarrinhoPage } from '../carrinho/carrinho';

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
    public produtosProvider: ProdutosProvider, public toast: ToastController) {
      this.getProdutos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutosShowPage');
    this.getProdutos();
  }

  ionViewDidEnter(){
    this.getProdutos();
  }

  getProdutos() {
    this.produtosProvider.findAll()
    .then(data => {
      this.produtos = data;
      console.log(this.produtos);
    });
  }

  addToCart() {
    this.toast.create({ message: 'Esta função ainda não funciona', 
        duration: 3000, 
        position: 'botton',
        cssClass: "toast-success",
        showCloseButton: true,
        closeButtonText: "OK" 
      }).present();
  
      this.navCtrl.push(CarrinhoPage);
  }

}
