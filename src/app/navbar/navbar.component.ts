import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  lang = "pt"

  public onLanguageChange(){
    if(this.lang == "pt"){
      this.lang = "en"
    }else{
      this.lang = "pt"
    }
  }

}
