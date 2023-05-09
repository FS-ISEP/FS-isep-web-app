import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { NavBarButton } from '../navbar-button';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input() public showSidebar: boolean = false;
  @Input() public collapseSidebar: boolean = false;
  @Input() public navbarButtons: NavBarButton[] = [];

  @Output()
  sidebarToggled = new EventEmitter();

  toggleSideNav() {
    this.sidebarToggled.emit();
  }

}
