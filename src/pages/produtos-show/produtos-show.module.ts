import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdutosShowPage } from './produtos-show';

@NgModule({
  declarations: [
    ProdutosShowPage,
  ],
  imports: [
    IonicPageModule.forChild(ProdutosShowPage),
  ],
})

export class ProdutosShowPageModule {}
