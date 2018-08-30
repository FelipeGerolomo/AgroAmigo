import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CotacoesPage } from './cotacoes';

@NgModule({
  declarations: [
    CotacoesPage,
  ],
  imports: [
    IonicPageModule.forChild(CotacoesPage),
  ],
})
export class CotacoesPageModule {}
