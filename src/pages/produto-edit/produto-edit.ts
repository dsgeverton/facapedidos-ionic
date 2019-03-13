import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { ProdutosProvider, Produto } from '../../providers/produtos/produtos';

/**
 * Generated class for the ProdutoEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produto-edit',
  templateUrl: 'produto-edit.html',
})
export class ProdutoEditPage {

  produto: Produto;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public toast: ToastController,
    private produtosProvider:ProdutosProvider, private _loadingCtrl: LoadingController) {
      this.produto = new Produto();

      if (this.navParams.data.id) {
        this.produtosProvider.findById(this.navParams.data.id)
          .then((result: any) => {
            this.produto = result;
          })
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutoEditPage');
  }

  save() {
    this.produtosProvider.save(this.produto)
      .then(() => {
        this.toast.create({ message: 'Produto salvo com sucesso.', 
        duration: 3000, 
        position: 'botton',
        cssClass: "toast-success",
        showCloseButton: true,
        closeButtonText: "OK" 
      }).present();
        this.navCtrl.pop();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao salvar o produto.', 
        duration: 3000, 
        position: 'botton',
        cssClass: "toast-fail",
        showCloseButton: true,
        closeButtonText: "OK" }).present();
      });
  }

  loading;

showLoading() {
    if(!this.loading){
        this.loading = this._loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    }
}

dismissLoading(){
    if(this.loading){
        this.loading.dismiss();
        this.loading = null;
    }
}

}
