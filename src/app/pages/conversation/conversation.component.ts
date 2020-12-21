import { avatar } from './conversation.constant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {

  constructor() { }

  readonly avatar = avatar;

  ngOnInit(): void {
  }

}
