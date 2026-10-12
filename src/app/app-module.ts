import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Lumi } from './components/lumi/lumi';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroSecond } from './components/hero-second/hero-second';
import { Scroller } from './components/scroller/scroller';
import { Technology } from './components/technology/technology';
import { Reference } from './components/reference/reference';
import { Contact } from './components/contact/contact';
import { HttpClientModule } from '@angular/common/http';
import { Footer } from './components/footer/footer';
import { Float } from './components/float/float';

@NgModule({
  declarations: [
    App,
    Navbar,
    Hero,
    About,
    Lumi,
    HeroSecond,
    Scroller,
    Technology,
    Reference,
    Contact,
    Footer,
    Float
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
  ],
  bootstrap: [App]
})
export class AppModule { }
