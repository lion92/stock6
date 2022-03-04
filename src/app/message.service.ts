import { Injectable } from '@angular/core';
import {serializeI18nMessageForGetMsg} from "@angular/compiler/src/render3/view/i18n/get_msg_utils";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private message: string="";

  constructor() { }
  setMessage(message:string){
    this.message=message;
  }
  getMessage(){
    return this.message;
  }
}

