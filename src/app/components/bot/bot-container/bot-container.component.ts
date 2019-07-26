import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { BubbleModel } from 'src/app/shared/models/bubble.model';
import { MsgEnum } from 'src/app/shared/enums/message.enum';
import { MessageService } from 'src/app/services/message.service';
import { Constants } from 'src/app/services/constants.service';
import { CustomBotService } from 'src/app/services/custom-bot.service';
import { ICustomStyles } from 'src/app/shared/models/custom-style.model';
import { rightToLeft, fade } from 'src/app/services/animations.service';

@Component({
  selector: 'app-bot-container',
  templateUrl: './bot-container.component.html',
  styleUrls: ['./bot-container.component.scss'],
  animations: [
    rightToLeft,
    fade
  ]
})
export class BotContainerComponent implements OnInit {
  bubbles: BubbleModel[] = [];
  msgId: MsgEnum;
  url: string;
  urlIframe: string;
  userMessage: string;
  styles: ICustomStyles;
  animationState: boolean;

  constructor(public msg: MessageService,
              private cbS: CustomBotService) {
    this.urlIframe = 'https://www.youtube.com/embed/EqWLpTKBFcU';
  }

  ngOnInit() {
    this.initGreeting();
    this.cbS.getStyles().subscribe((data: ICustomStyles) => {
      console.log(data);
      this.styles = data;
    });
    this.animationState = true;
  }
  initGreeting() {
    this.bubbles.push({
      isBot: true,
      message: this.msg.getMessage(MsgEnum.BOT_WELCOME),
      date: new Date(),
      isActive: true
    });
  }
  emitMsgBubble(message) {
    this.userMessage = message.value;
    this.bubbles.push({
      isBot: false,
      message: this.userMessage,
      date: new Date(),
      isActive: true
    });
    this.animationState = false;
  }

}
