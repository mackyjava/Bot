import { Injectable } from '@angular/core';
import { MsgEnum } from '../shared/enums/message.enum';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private locale: any = null;

  constructor() {
       this.locale = ES;
  }

  public getMessage(msgId: MsgEnum, ...params: any[]) {
     let message = '';
     if (this.locale.hasOwnProperty(msgId)) {
           message = this.locale[msgId];
       }
     return message;
  }
}

const ES = {
    [MsgEnum.WELCOME]: 'Bienvenido a Parla',
    [MsgEnum.INPUT_PLACEHOLDER] : '¡Escribe aquí!',
    [MsgEnum.BOT_WELCOME] : 'Hola, escribe algo, no me hagas perder el tiempo.',
    [MsgEnum.SUCCESS]: 'Acción realizada de forma correcta.',
    [MsgEnum.CONECTION_ERROR]: 'Error de conexión.',
    [MsgEnum.UNKNOW_ERROR]: 'Error no definido.'
};
