import { Component, Input, OnInit } from '@angular/core';
import { Documents } from '../document.model';

@Component({
  selector: 'app-document-item',
  templateUrl: './document-item.component.html',
  styleUrls: ['./document-item.component.css']
})
export class DocumentItemComponent implements OnInit {
  @Input () documents: Documents;

onSelectedDocument(){




}
ngOnInit(){}

}
