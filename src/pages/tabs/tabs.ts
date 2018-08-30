import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CotacoesPage } from '../cotacoes/cotacoes';
import { NewsPage } from '../news/news';
import { WeatherPage } from '../weather/weather';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CotacoesPage;
  tab2Root = NewsPage;
  tab3Root = WeatherPage;

  constructor() {

  }
}
