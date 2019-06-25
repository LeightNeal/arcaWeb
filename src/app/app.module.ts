import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavWelcomeComponent } from './components/navbars/nav-welcome/nav-welcome.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomeComponent } from './pages/welcome/welcome/welcome.component';
import { FormAdoptComponent } from './components/forms/form-adopt/form-adopt.component';
import { AdoptPetComponent } from './pages/welcome/adopt-pet/adopt-pet.component';
@NgModule({
  declarations: [
    AppComponent,
    NavWelcomeComponent,
    WelcomeComponent,
    FooterComponent,
    FormAdoptComponent,
    AdoptPetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
