import { Component, OnInit } from '@angular/core';
import { Documents } from './document.model';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],

})
export class DocumentsComponent  implements OnInit{
  SelectedDocument : Documents;


  constructor( ){

  }

  ngOnInit(){

  }

}
