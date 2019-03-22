import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarrinhosProvider, Carrinho } from '../../providers/carrinhos/carrinhos';
import { ProdutosProvider, Produto } from '../../providers/produtos/produtos';

/**
 * Generated class for the CarrinhoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html',
})
export class CarrinhoPage {

  produtos: any;
  carrinhos: any;
  displayProdutos: Array<Produto>;
  carrinho: Carrinho;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public carrinhosProvider: CarrinhosProvider, public produtosProvider: ProdutosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrinhoPage');
    this.getProdutos();
    this.getCarrinhos();
  }

  ionViewDidEnter() {
    this.getCarrinhos();
  }

  getProdutos() {
    this.produtosProvider.findAll()
    .then(data => {
      this.produtos = data;
      console.log(this.produtos);
    });
  }

  getCarrinhos() {
    this.carrinhosProvider.findAll()
    .then(data => {
      this.carrinhos = data;
      console.log(this.carrinhos);
    });
  }

  listProdutosOnCart(carrinho: Carrinho){
    console.log(carrinho[0].id);
      this.getProdutos();
      for(let produto of this.produtos){
      
        if(produto.carrinho != null) {
          console.log(produto.carrinho.id);
          if(produto.carrinho.id == carrinho[0].id){
            console.log("Entrou iff - Produto está no carrinho");
            this.displayProdutos.push(produto);
          }
        }
      }
      console.log(this.displayProdutos);
  }

  teste(carrinho) {
    console.log("TESTEEEE");
    this.carrinho = carrinho;
  }

}
