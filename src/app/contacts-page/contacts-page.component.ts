import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Contactos - Formula Student ISEP")
  }
  
}
