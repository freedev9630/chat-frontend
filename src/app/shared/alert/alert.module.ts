import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { DialogModule } from 'primeng/dialog';
import { AlertComponent } from './alert.component';

@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
    ButtonModule,
    CommonModule,
    ConfirmDialogModule,
    ToastModule,
    MessagesModule,
    DialogModule
  ],
  exports: [
    AlertComponent
  ],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class SharedAlertModule { }
