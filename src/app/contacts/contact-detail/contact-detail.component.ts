import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';


@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit{

  constructor () {}

  contacts: Contact [] = [new Contact (1, 'Rex Barzee','email',208-496-3769, '../../assets/barzeer.jpg', null),
                          new Contact (2, 'R. Kent Johnson','email',208-496-3771, '../../assets/jacksonk.jpg', null)

  ];

  ngOnInit() {

  }

}
