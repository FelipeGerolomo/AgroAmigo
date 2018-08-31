import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CotacoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cotacoes',
  templateUrl: 'cotacoes.html',
})
export class CotacoesPage {

  cotacoes: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.getCotacoes();
  }

  getCotacoes() {
    this.http.get("https://cotacoes-api.herokuapp.com/")
    .subscribe((data) => {
      this.cotacoes = data;
      console.log(this.cotacoes)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CotacoesPage');
  }

}
