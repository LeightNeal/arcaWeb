import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/welcome/landing/landing.component';
import { LoginComponent } from './pages/welcome/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome/welcome.component';
import { AdoptComponent } from './pages/welcome/adopt/adopt.component';
import { LostComponent } from './pages/welcome/lost/lost.component';
import { NewsComponent } from './pages/welcome/news/news.component';
import { DatesComponent } from './pages/welcome/dates/dates.component';
import { TipsComponent } from './pages/welcome/tips/tips.component';
import { ContactComponent } from './pages/welcome/contact/contact.component';
import { AdoptADogComponent } from './pages/welcome/adopt-adog/adopt-adog.component';
import { AdoptACatComponent } from './pages/welcome/adopt-acat/adopt-acat.component';
import { SinglePostComponent } from '../app/pages/single-post/single-post.component';
import {IsMineComponent} from '../app/pages/is-mine/is-mine.component';
import {FormRegisterComponent} from '../app/pages/welcome/form-register/form-register.component';

const welcomeRoutes: Routes = [
  {path: 'landing', component: LandingComponent},
  {path: 'adopt', component: AdoptComponent},
  {path: 'adopt-dogs', component: AdoptADogComponent},
  {path: 'adopt-cats', component: AdoptACatComponent},
  {path: 'lost', component: LostComponent},
  {path: 'news', component: NewsComponent},
  {path: 'dates', component: DatesComponent},
  {path: 'tips', component: TipsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'is-mine', component: IsMineComponent},
  {path: 'single-post', component: SinglePostComponent},
  {path: 'register', component: FormRegisterComponent},
  {path: '', pathMatch: 'full', redirectTo: 'landing'}
];

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent, children: welcomeRoutes},
  {path: '', pathMatch: 'full', redirectTo: 'welcome'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
