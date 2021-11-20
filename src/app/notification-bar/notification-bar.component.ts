import { Component, OnInit } from '@angular/core';
import { NotificationType } from '../notification-type';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification-bar',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.scss']
})
export class NotificationBarComponent implements OnInit {
  
  constructor(
    readonly _notificationService: NotificationService
  ) { }

  ngOnInit(): void {
  }

  closeNotificationBar() {
    this._notificationService.closeNotificationBar()
  }

  getNotificationTypeAsString() {
    return NotificationType[this._notificationService.notificationType].toLowerCase()
  }
}
