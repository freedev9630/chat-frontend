import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { AlertModel } from '@mean/models';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  providers: [MessageService]
})
export class AlertComponent implements OnChanges {
  @Input() singleMessage: string = '';
  @Input() severity: string = AlertModel.AlertSeverity.ERROR;
  @Input() open = false;
  @Output() eventCloseToast = new EventEmitter();
  constructor(
    private messageService: MessageService,
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    const openWhenMessageNotChanged = changes['open']?.currentValue && changes['singleMessage'] === undefined;
    const openWhenMessageChanged = changes['open']?.currentValue && (changes['singleMessage']?.currentValue !== changes['singleMessage']?.previousValue);
    if (openWhenMessageChanged  || openWhenMessageNotChanged) {
      this.openToast();
    }
  }

  private openToast() {
      this.messageService.add(
        {
          severity: this.severity,
          summary: this.severity === AlertModel.AlertSeverity.ERROR ? AlertModel.AlertMessage.ERROR :  AlertModel.AlertMessage.SUCCESS,
          detail: this.singleMessage
        }
      );
  }

}
