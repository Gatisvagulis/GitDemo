import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenpageGuard } from './guards/openpage.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { ReglapaComponent } from './reglapa/reglapa.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', canActivate:[OpenpageGuard],component: HomePageComponent },
  { path: 'registracija', canActivate:[OpenpageGuard], component: RegistracijaComponent },
  { path: 'reglapa', canActivate:[OpenpageGuard], component: ReglapaComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
