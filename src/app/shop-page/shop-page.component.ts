import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Loja - Formula Student ISEP")
  }
  
}
