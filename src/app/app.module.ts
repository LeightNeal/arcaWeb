import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormLoginComponent } from './components/forms/form-login/form-login.component';
import { NavWelcomeComponent } from './components/navbars/nav-welcome/nav-welcome.component';
import { LandingComponent } from './pages/welcome/landing/landing.component';
import { WelcomeComponent } from './pages/welcome/welcome/welcome.component';
import { LoginComponent } from './pages/welcome/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    NavWelcomeComponent,
    LandingComponent,
    WelcomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
