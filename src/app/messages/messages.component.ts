import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  constructor(readonly messageService: MessageService) {}
  public clearMessages(): void {
    this.messageService.clear();
  }
  public get messages(): string[] {
    return this.messageService.messages;
  }

  ngOnInit() {}
}
