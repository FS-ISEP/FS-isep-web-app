import { Component} from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-nav-buttons',
  templateUrl: './nav-buttons.component.html',
  styleUrls: ['./nav-buttons.component.css']
})
export class NavButtonsComponent {

  navbarButtons = [
    new NavBarButton("Sobre", "About Us", "/about"),
    new NavBarButton("Equipa", "Team", "/team"),
    new NavBarButton("Patrocinadores", "Sponsors", "/sponsors"),
    new NavBarButton("Loja", "Shop", "/shop"),
    new NavBarButton("Contactos", "Contact Us", "/contacts")
  ]

  languageService: LanguageService;

  constructor(languageService: LanguageService){
    this.languageService = languageService;
  }

  public transitionEndHandler(e: TransitionEvent) {
    if (e.propertyName == "box-shadow") {
      var element = e.target as HTMLElement;
      console.log(e);
    }
  }
}

class NavBarButton {
  name_pt: String
  name_uk: String
  route: String

  constructor(name_pt: String, name_uk: String, route: String) {
    this.name_pt = name_pt;
    this.name_uk = name_uk;
    this.route = route;
  }
}
