import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SponsorsPageComponent } from './sponsors-page/sponsors-page.component';
import { CarPageComponent } from './car-page/car-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'about', component: AboutPageComponent},
  { path: 'sponsors', component: SponsorsPageComponent},
  { path: 'contacts', component: ContactsPageComponent},
  { path: 'car', component: CarPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
