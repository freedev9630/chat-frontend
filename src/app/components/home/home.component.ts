import { Component, OnInit } from '@angular/core';
import { AuthModel } from '@mean/models';
import { ApiService, AuthService, ChatService, Message } from '@mean/services';
import { UriConstants } from '@mean/utils';
import { BaseComponent } from 'src/app/shared';
import { LocalStorageConstants } from 'src/app/utils/local.storage';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent<Message, Message>  implements OnInit {
  showTyping = false;
  inputValue = '';
  userData!: AuthModel.User;
  messages: Message[] = [];
  counter = 0;
  constructor(
    protected override apiService: ApiService<Message, Message>,
    private readonly chatService: ChatService,
    private readonly authService: AuthService
  ){
    super(apiService);
    this.chatService.getMessage().subscribe(val => {
      this.messages = val;
    });

    this.chatService.userListening().subscribe(val => {
      if (typeof val === 'boolean') {
        this.showTyping = false;
      } else {
        this.showTyping = val.id !== this.userData.id;
      }
    });
  }

    ngOnInit() {
      this.userData = this.authService.readSessionStorage(LocalStorageConstants.USER_TOKEN).user;
      this.listAllUsers();
    }

    saveMessages() {
      const data = {userId: this.userData.id, content: this.inputValue};
      this.create({data , url: `${UriConstants.MESSAGES}/create`});
      this.inputValue = '';
      this.stopTyping();
    }

    private async listAllUsers() {
      this.messages = (await this.searchArrAsync({url: UriConstants.MESSAGES})).response;
    }

    stopTyping() {
      this.counter = 0;
      this.chatService.sendTyping(false);
    }

    eventFocus() {
      this.counter ++;
      if (this.counter === 1) this.chatService.sendTyping(this.userData);
    }

    handdleDelete(id: string) {
      this.delete({url: `${UriConstants.MESSAGES}/${id}`});
    }

}
