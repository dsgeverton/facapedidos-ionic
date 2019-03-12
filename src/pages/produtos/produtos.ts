import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Tabs } from 'ionic-angular';
import { ProdutosProvider } from '../../providers/produtos/produtos';
import { ProdutoEditPage } from '../produto-edit/produto-edit';

/**
 * Generated class for the ProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  produtos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public produtosProvider: ProdutosProvider, private toast: ToastController) {

      this.getProdutos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutosPage');
    this.getProdutos();
  }

  getProdutos() {
    this.produtosProvider.findAll()
    .then(data => {
      this.produtos = data;
      console.log(this.produtos);
    });
  }
  removeProduto(id: number) {
    this.produtosProvider.deleteById(id)
      .then( () => {
        this.getProdutos();
        this.toast.create({ message: 'Produto removido.', duration: 3000, position: 'botton' }).present();
      }
      )
  }
  editProduto(id: number) {
    this.navCtrl.push(ProdutoEditPage, {id: id});
  }

  addProduto() {
    this.navCtrl.push(ProdutoEditPage);
  }


}
