import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavBarButton } from '../navbar-button';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input() public showSidebar = false;
  @Input() public isSidebarHidden = false;
  @Input() public navbarButtons: NavBarButton[] = [];

  @Output()
  sidebarToggled = new EventEmitter();

  toggleSidebar() {
    this.sidebarToggled.emit();
  }
}
