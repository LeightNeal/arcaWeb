import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormLoginComponent } from './components/forms/form-login/form-login.component';
import { NavWelcomeComponent } from './components/navbars/nav-welcome/nav-welcome.component';
import { LandingComponent } from './pages/welcome/landing/landing.component';
import { WelcomeComponent } from './pages/welcome/welcome/welcome.component';
import { LoginComponent } from './pages/welcome/login/login.component';
import { ContactComponent } from './pages/welcome/contact/contact.component';
import { AdoptComponent } from './pages/welcome/adopt/adopt.component';
import { AdoptADogComponent } from './pages/welcome/adopt-adog/adopt-adog.component';
import { AdoptACatComponent } from './pages/welcome/adopt-acat/adopt-acat.component';
import { LostComponent } from './pages/welcome/lost/lost.component';
import { NewsComponent } from './pages/welcome/news/news.component';
import { DatesComponent } from './pages/welcome/dates/dates.component';
import { TipsComponent } from './pages/welcome/tips/tips.component';
import { FormSearchComponent } from './components/forms/form-search/form-search.component';
import { NewCardComponent } from './components/new-card/new-card.component';
import { CardTypeComponent } from './components/cards/card-type/card-type.component';

@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    NavWelcomeComponent,
    LandingComponent,
    WelcomeComponent,
    LoginComponent,
    ContactComponent,
    AdoptComponent,
    AdoptADogComponent,
    AdoptACatComponent,
    LostComponent,
    NewsComponent,
    DatesComponent,
    TipsComponent,
    FormSearchComponent,
    NewCardComponent,
    CardTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
