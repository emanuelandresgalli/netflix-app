import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { FilmsComponent } from './components/films/films.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavComponent } from './components/nav/nav.component';
// import { TopComponent } from './components/top/top.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    HeroComponent,
    NavComponent,
    // TopComponent
  ],
  imports: [
    BrowserModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
