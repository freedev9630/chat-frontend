import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { AuthModel } from '../models/core/auth.model';
export type Message = {
  id:     string;
  firstName:    string;
  lastName:    string;
  content: string;
  img:     string;
  userId:  number;
}

@Injectable({
  providedIn: 'root'
})

export class ChatService {
  constructor(private socket: Socket) {}

  sendTyping(msg: AuthModel.User | false) {
    this.socket.emit('typing', msg);
  }

  getMessage() {
    return this.socket.fromEvent<Message[]>('messages').pipe(map((data) => data));
  }

  userListening() {
    return this.socket.fromEvent<AuthModel.User | false>('listening').pipe(map((data: AuthModel.User | false) => data));
  }

}
