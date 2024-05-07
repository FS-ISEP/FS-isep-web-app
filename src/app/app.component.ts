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
  public isSidebarHidden: boolean = true;

  navbarButtons = [
    //new NavBarButton("Inicio", "Home", "/"),
    new NavBarButton("Sobre", "About Us", "/about"),
    new NavBarButton("Carro", "Car", "/car"),
    new NavBarButton("Patrocinadores", "Sponsors", "/sponsors"),
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

  toggleSidebar(): void {
    this.isSidebarHidden = !this.isSidebarHidden;

    // Disable scroll when sidebar is visible. Scroll bar width is 17px
    if (this.isSidebarHidden) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }
}
