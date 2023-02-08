import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Documents } from '../document.model';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  @Output () documentWasSelected = new EventEmitter<Documents>();

documents: Documents [] = [new Documents('341','CSE-341 Web Back End Development','','https://byui.instructure.com/courses/224426',[]),
new Documents('430','WDD-430','Full-Stack Development','https://byui.instructure.com/courses/219644',[]),
new Documents('430','WDD-430','Full-Stack Development','https://byui.instructure.com/courses/219644',[]),
new Documents('430','WDD-430','Full-Stack Development','https://byui.instructure.com/courses/219644',[]),
new Documents('430','WDD-430','Full-Stack Development','https://byui.instructure.com/courses/219644',[])];

constructor(){}

ngOnInit() {}

    onSelectedDocument(documents: Documents){
    this.documentWasSelected.emit(documents);
  }

}


