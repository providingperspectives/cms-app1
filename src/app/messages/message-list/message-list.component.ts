import { Component } from '@angular/core';

import { Messages } from '../messages.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent {
  message: Messages[] =[
    new Messages('2345', 'Hi', 'Do you want to meet up?', 'Emma A' ),
    new Messages('2346', 'Test Tomarrow', 'Hey, we have a test tomarrow, want to study?', 'David O.' )
  ];

  onMessageAdded(message: Messages) {
    this.message.push(message);
  }
}
