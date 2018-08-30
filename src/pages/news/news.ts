import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  superNews: any;
  news: any;
  data: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {
    console.log("to aqui")
    this.getNews();
  }

  getNews() {
    this.http.get("https://api.cognitive.microsoft.com/bing/v7.0/news/search?q=agronegocio&originalImg=true&freshness=week", { headers: { 'Ocp-Apim-Subscription-Key': 'dfadc1af341143a29cb7cd0c81702def' } })
      .subscribe((data: Array<any>) => {
        this.news = [];
        this.superNews = { image: null, name: null, url: null }
        this.data = data["value"];
        for (let index = 0; index < this.data.length; index++) {
          if (this.data[index].image) {
            this.news.push(this.data[index])
            this.superNews = { image: this.news[0].image["contentUrl"], name: this.news[0].name, url: this.news[0].url }
          }
        }
        console.log(this.news)
      })
  }

  goToUrl(url) {
    console.log(url)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

}
