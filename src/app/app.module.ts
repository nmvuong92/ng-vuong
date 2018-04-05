import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HumanComponent } from './human/human.component';
import { NewsComponent } from './news/news.component';
import { ProductsComponent } from './products/products.component';
import { ConfigComponent } from './config/config.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HumanComponent,
    NewsComponent,
    ProductsComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
