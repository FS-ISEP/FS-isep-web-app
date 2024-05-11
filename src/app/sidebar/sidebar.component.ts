import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavBarButton } from '../navbar-button';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() public showSidebar = false;
  @Input() public isSidebarHidden = false;
  @Input() public navbarButtons: NavBarButton[] = [];

  @Output()
  sidebarToggled = new EventEmitter();

  toggleSidebar() {
    this.sidebarToggled.emit();
  }
}
