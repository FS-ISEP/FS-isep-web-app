import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  navbarButtons = [
    new NavBarButton("Sobre", "/about"),
    new NavBarButton("Equipa", "/team"),
    new NavBarButton("Patrocinadores", "/sponsors"),
    new NavBarButton("Contactos", "/contacts"),
  ]

}

class NavBarButton{
  name: String
  route: String

  constructor(name: String, route: String){
    this.name = name;
    this.route = route;
  }
}
