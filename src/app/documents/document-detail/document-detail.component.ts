import { Component, OnInit, Input } from '@angular/core';
import { Documents } from '../document.model';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit{

 @Input () document: Documents;

  constructor(){}

  ngOnInit() {

  }

}
