import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ProdutosPage } from '../produtos/produtos';
import { ProdutosShowPage } from '../produtos-show/produtos-show';
import { ProdutosProvider } from '../../providers/produtos/produtos';
import { CarrinhoPage } from '../carrinho/carrinho';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  produtos: any;

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = ProdutosPage;
  tab5Root = ProdutosShowPage;
  tab6Root = CarrinhoPage;
  qtdProdutos = 0;

  constructor(public produtosProvider:ProdutosProvider) {
    this.getProdutos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutosPage Tabs');
  }

  getProdutos() {
    this.produtosProvider.findAll()
    .then(data => {
      this.produtos = data;
      this.qtdProdutos = this.produtos.length;
      console.log("Valor do teste:", this.qtdProdutos);
      console.log(this.produtos.length);
    });
  }

}
