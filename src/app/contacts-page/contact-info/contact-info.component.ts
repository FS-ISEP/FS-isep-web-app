import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css'],
})
export class ContactInfoComponent {
  fs_email = 'fsisep@gmail.com';

  fs_instagram_info = {
    url: 'https://www.instagram.com/fs_isep/',
    handle: '@fs_isep',
  };
}
