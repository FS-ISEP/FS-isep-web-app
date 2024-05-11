import { Component, HostListener, OnInit } from '@angular/core';
import { NavBarButton } from './navbar-button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'FS-isep-web-app';

  readonly MAX_FULL_CONTENT_WIDTH_PX = 992;

  public showSidebar = false;
  public isSidebarHidden = true;

  navbarButtons = [
    new NavBarButton('Sobre', 'About Us', '/about'),
    new NavBarButton('Equipa', 'Team', '/team'),
    new NavBarButton('Carro', 'Car', '/car'),
    new NavBarButton('Patrocinadores', 'Sponsors', '/sponsors'),
    new NavBarButton('Loja', 'Shop', '/shop'),
    new NavBarButton('Contactos', 'Contact Us', '/contacts'),
  ];

  ngOnInit() {
    this.showSidebarCondition();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.showSidebarCondition();
  }

  private showSidebarCondition() {
    window.innerWidth < this.MAX_FULL_CONTENT_WIDTH_PX
      ? (this.showSidebar = true)
      : (this.showSidebar = false);
  }

  toggleSidebar(): void {
    this.isSidebarHidden = !this.isSidebarHidden;

    // Disable scroll when sidebar is visible. Scroll bar width is 17px
    if (this.isSidebarHidden) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }
}
