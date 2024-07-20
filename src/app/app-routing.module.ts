import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { CarPageComponent } from './car-page/car-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SponsorsPageComponent } from './sponsors-page/sponsors-page.component';
// import { TeamPageComponent } from './team-page/team-page.component';
// import { ShopPageComponent } from './shop-page/shop-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'car', component: CarPageComponent },
  { path: 'sponsors', component: SponsorsPageComponent },
  { path: 'contacts', component: ContactsPageComponent },
  // { path: 'team', component: TeamPageComponent},
  // { path: 'shop', component: ShopPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
