import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProdutosPage } from '../pages/produtos/produtos';
import { ProdutosProvider } from '../providers/produtos/produtos';

import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { ProdutosShowPage } from '../pages/produtos-show/produtos-show';
import { ProdutoEditPage } from '../pages/produto-edit/produto-edit';
import { CarrinhosProvider } from '../providers/carrinhos/carrinhos';
import { CarrinhoPage } from '../pages/carrinho/carrinho';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ProdutoEditPage,
    ProdutosPage,
    ProdutosShowPage,
    CarrinhoPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ProdutosPage,
    ProdutoEditPage,
    ProdutosShowPage,
    CarrinhoPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProdutosProvider,
    CarrinhosProvider
  ]
})
export class AppModule {}
