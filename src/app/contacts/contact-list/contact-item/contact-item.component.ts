import { Component } from '@angular/core';

import { Contact } from '../../contact-list.model';
@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent {

 contact!: Contact;

  constructor() {}

}
