import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavBarButton } from 'src/app/navbar-button';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-nav-buttons-sidebar',
  templateUrl: './nav-buttons-sidebar.component.html',
  styleUrls: ['./nav-buttons-sidebar.component.css'],
})
export class NavButtonsSidebarComponent {
  @Input() public navbarButtons: NavBarButton[] = [];
  @Input() public isSidebarHidden = true;

  @Output()
  sidebarToggled = new EventEmitter();

  languageService: LanguageService;

  constructor(languageService: LanguageService) {
    this.languageService = languageService;
  }

  toggleSidebar() {
    this.sidebarToggled.emit();
  }
}
