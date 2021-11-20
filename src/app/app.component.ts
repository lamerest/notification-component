import { Component } from '@angular/core';
import { NotificationType } from './notification-type';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notification-component';

  constructor(
    private readonly _notificationService: NotificationService
  ) {}

  openNotificationBar() {
    console.log("Call not bar");
    this._notificationService.callNotificationBar(NotificationType.Acknowledgment, "Acknowledgment", "Test Acknowledgment")
  }
}
