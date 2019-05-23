import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/welcome/landing/landing.component';
import { LoginComponent } from './pages/welcome/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome/welcome.component';

const welcomeRoutes: Routes = [
  {path: 'landing', component: LandingComponent},
  {path: 'login', component: LoginComponent},
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
