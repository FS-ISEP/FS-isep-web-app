import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { SponsorsPageComponent } from './sponsors-page/sponsors-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavButtonsComponent } from './navbar/nav-buttons/nav-buttons.component';
import { FooterComponent } from './footer/footer.component';
import { LangFlagComponent } from './navbar/lang-flag/lang-flag.component';
import { SocialsComponent } from './navbar/socials/socials.component';
import { ShopPageComponent } from './shop-page/shop-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AboutPageComponent,
    TeamPageComponent,
    SponsorsPageComponent,
    ContactsPageComponent,
    NavbarComponent,
    NavButtonsComponent,
    FooterComponent,
    LangFlagComponent,
    SocialsComponent,
    ShopPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
