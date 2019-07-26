import { Component, OnInit, Input } from '@angular/core';
import { BubbleModel } from 'src/app/shared/models/bubble.model';
import { Constants } from 'src/app/services/constants.service';
import { rightToLeft, fade } from 'src/app/services/animations.service';

@Component({
  selector: 'app-bubbles',
  templateUrl: './bubbles.component.html',
  styleUrls: ['./bubbles.component.scss'],
  animations: [
    rightToLeft,
    fade
  ]
})
export class BubblesComponent implements OnInit {
  @Input() bubbles: BubbleModel[] = [];
  @Input() src: string;
  @Input() urlIframe: string;
  @Input() stateAnimation: boolean;
  urlBot: string;
  urlUser: string;

  constructor() {
  }
  ngOnInit() {
   console.log( this.stateAnimation);
   setTimeout(() => {
    this.stateAnimation = !this.stateAnimation;
   }, 3000);
  }

  getIcon(isBot) {
    return isBot ? Constants.iconsResource.isBot : Constants.iconsResource.isUser;
  }
}
