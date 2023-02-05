import { Component, OnInit } from '@angular/core';
import { Contact } from './contact-detail/contacts-detail.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  selectedContact: Contact;

  constructor(){ }

  ngOnInit() {

  }


}


