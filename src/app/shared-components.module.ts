import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './Componentes/nav-bar/nav-bar.component';
import { IonicModule } from '@ionic/angular';
import { NewsCardComponent } from './Componentes/news-card/news-card.component';



@NgModule({
  declarations: [NavBarComponent,NewsCardComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [NavBarComponent,NewsCardComponent]
})
export class SharedComponentsModule { }
