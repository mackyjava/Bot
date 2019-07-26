import { Component, OnInit, Input } from '@angular/core';
import { MsgEnum } from 'src/app/shared/enums/message.enum';
import { MessageService } from 'src/app/services/message.service';
import { CustomBotService } from 'src/app/services/custom-bot.service';

@Component({
  selector: 'app-nav-bot',
  templateUrl: './nav-bot.component.html',
  styleUrls: ['./nav-bot.component.scss']
})
export class NavBotComponent implements OnInit {
  msgId = MsgEnum;
  isColor = false;
  isBackgroundColor = false;
  @Input() navColor: string;
  @Input() fontColor: string;
  constructor( public msg: MessageService) { }

  ngOnInit() {
  }
}
