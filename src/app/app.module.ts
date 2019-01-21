import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Componentes
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import {  HeaderComponent } from './components/shared/header/header.component';
import {  FooterComponent } from './components/shared/footer/footer.component';
//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios

import { HeroesService } from './services/heroes.service';
import { HeroeComponent } from './components/heroe/heroe.component';
import { ResultsComponent } from './components/results/results.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component'

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeroesComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    HeroeComponent,
    ResultsComponent,
    HeroeTarjetaComponent
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
