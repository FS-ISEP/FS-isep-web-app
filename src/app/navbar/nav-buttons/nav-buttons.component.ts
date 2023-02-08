import { Component, Input } from '@angular/core';

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
    new NavBarButton("Contactos", "Contact US", "/contacts"),
  ]

  @Input() lang = "";
}

class NavBarButton{
  name_pt: String
  name_uk: String
  route: String

  constructor(name_pt: String, name_uk: String, route: String){
    this.name_pt = name_pt;
    this.name_uk = name_uk;
    this.route = route;
  }
}
