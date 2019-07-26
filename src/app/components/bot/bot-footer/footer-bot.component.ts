import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatFormFieldControl} from '@angular/material/form-field';
import { MsgEnum } from 'src/app/shared/enums/message.enum';
import { MessageService } from 'src/app/services/message.service';
import { BubbleModel } from 'src/app/shared/models/bubble.model';

@Component({
  selector: 'app-footer-bot',
  templateUrl: './footer-bot.component.html',
  styleUrls: ['./footer-bot.component.scss']
})
export class FooterBotComponent implements OnInit {
  @Output() bubble = new EventEmitter<string> ();
  msgId = MsgEnum;

  constructor( public msg: MessageService) { }


  ngOnInit() {
  }

  sendMessage(message) {
    this.bubble.emit(message);
    message.value = '';
  }
  addEmoji(event) {
    console.log(event);
  }
}
