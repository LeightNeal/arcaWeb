import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
import { FooterComponent } from './components/footer/footer.component';
import { CurrentNewsComponent } from './components/sections/current-news/current-news.component';
import { MapComponent } from './components/map/map.component';
import { ReportsListComponent } from './components/lists/reports-list/reports-list.component';
import { FormDateComponent } from './components/forms/form-date/form-date.component';
import { LostCardComponent } from './components/cards/lost-card/lost-card.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { SinglePostCardComponent } from './components/single-post-card/single-post-card.component';
import { FormMineComponent } from './components/forms/form-mine/form-mine.component';
import { ModalMineComponent } from './components/modals/modal-mine/modal-mine.component';
import { FormLostComponent } from './components/forms/form-lost/form-lost.component';
import { IsMineComponent } from './pages/is-mine/is-mine.component';
import { CardAdoptComponent } from './components/cards/card-adopt/card-adopt.component';
import { FormContactComponent } from './components/forms/form-contact/form-contact.component';
import { FormRegisterComponent } from './pages/welcome/form-register/form-register.component';
import { CardTipComponent } from './components/cards/card-tip/card-tip.component';

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
    CardTypeComponent,
    FooterComponent,
    CurrentNewsComponent,
    MapComponent,
    ReportsListComponent,
    FormDateComponent,
    LostCardComponent,
    SinglePostComponent,
    SinglePostCardComponent,
    FormMineComponent,
    ModalMineComponent,
    FormLostComponent,
    IsMineComponent,
    CardAdoptComponent,
    FormContactComponent,
    FormRegisterComponent,
    CardTipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
