import { Component, HostListener } from '@angular/core';
import { NavBarButton } from './navbar-button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FS-isep-web-app';

  readonly MAX_FULL_CONTENT_WIDTH_PX = 992;

  public showSidebar: boolean = false;
  public collapseSidebar: boolean = true;

  navbarButtons = [
    new NavBarButton("Sobre", "About Us", "/about"),
    new NavBarButton("Equipa", "Team", "/team"),
    new NavBarButton("Patrocinadores", "Sponsors", "/sponsors"),
    new NavBarButton("Loja", "Shop", "/shop"),
    new NavBarButton("Contactos", "Contact Us", "/contacts")
  ]

  ngOnInit() {
    this.showSidebarCondition();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    this.showSidebarCondition();
  }

  private showSidebarCondition() {
    window.innerWidth < this.MAX_FULL_CONTENT_WIDTH_PX ? this.showSidebar = true : this.showSidebar = false;
  }

  toggleSideNav(): void {
    this.collapseSidebar = !this.collapseSidebar;

    // Disable scroll when sidebar is visible. Scroll bar width is 17px
    if (this.collapseSidebar) {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    } else {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "17px";
    }
  }
}
