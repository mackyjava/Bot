import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICustomStyles } from '../shared/models/custom-style.model';

@Injectable({
  providedIn: 'root'
})
export class CustomBotService {
  private style: ICustomStyles = {
    bubbleBot: '',
    bubbleUser: '',
    fontColor: '#FFF',
    fontSize: '',
    footColor: '',
    navColor: '#BEC1EC',
    url: ''
  };
  private stylesBot = new BehaviorSubject<object>(this.style);

  constructor() {}

  setStyles(styles) {
    this.style = styles;
    this.refresh();
  }
  getStyles() {
    return this.stylesBot.asObservable();
  }
  private refresh() {
    return this.stylesBot.next(this.style);
  }
}
