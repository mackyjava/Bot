import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { isObject, isString } from 'util';
import { MessageService } from './message.service';
import { MsgEnum } from '../shared/enums/message.enum';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  constructor(private http: HttpClient,
              private msg: MessageService) { }

  connectionError(error, callback) {
    if (callback) {
      let message = this.msg.getMessage(MsgEnum.CONECTION_ERROR);
      if ( isObject(error)) {
        switch (error) {
          case isObject(error.error) &&
            isString(error.error.message) &&
            error.error.message:
              message = error.error.mesaage;
              break;
          case isString(error.messege) && error.message:
               message = error.message;
               break;
          case isString(error.statusText) && error.statusText:
               message = error.statusText;
         }
      }
      callback(false, message, null);
    }
  }
  // connectionSuccess(callback, data) {
  //  if (callback) {
  //    let isOk = false;
  //    let message = this.msg.get
  //  }
  // }

}
