import { Component, OnInit } from '@angular/core';
import { Contact} from '../contact-list.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit{
    contacts: Contact [] = [new Contact ('1', 'Rex Barzee','email','208-496-3769', '../../assets/barzeer.jpg', 'null'),
                            new Contact ('2', 'R. Kent Johnson','email','208-496-3771', '../../assets/jacksonk.jpg', 'null')

  ];



  constructor(){ }

  ngOnInit() { }

}


