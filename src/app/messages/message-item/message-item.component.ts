import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Messages } from '../message.model';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit{
  @Input () Message: Messages;
  @Output () contactSelected = new EventEmitter<void>();

  constructor (){ }

  ngOnInit (){

  }

  //onSelected (){
    //this.recipeSelected.emit();

  }


