import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavBarButton } from '../navbar-button';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Input() public showSidebar: boolean = false;
  @Input() public isSidebarHidden: boolean = false;
  @Input() public navbarButtons: NavBarButton[] = [];

  @Output()
  sidebarToggled = new EventEmitter();

  toggleSidebar() {
    this.sidebarToggled.emit();
  }

}
