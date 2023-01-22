import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact-detail/contacts-detail.model';


@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit{

  constructor () {}

  contacts: Contact [] = [new Contact ('1', 'Rex Barzee','email','208-496-3769', '../../assets/barzeer.jpg', null)


  ];

  ngOnInit() {

  }

}
