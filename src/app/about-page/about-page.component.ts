import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent {

  selectedButton: string = 'Historia'; 
  selectedColor: string = 'white'; // Selected color (e.g., green)
  unselectedColor: string = 'rgb(196, 196, 196)'; // Unselected color (e.g., red)


  constructor(private titleService: Title) {
    this.titleService.setTitle("Sobre - Formula Student ISEP")
  }
  selectButton(button: string) {
      this.selectedButton = button; // Select the clicked button
    
  }
}


