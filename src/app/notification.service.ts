import { Injectable } from '@angular/core';
import { NotificationType } from './notification-type';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private  _isNotificationBarOpen = false
  title = "Error"
  message = "Something went wrong"
  notificationType = NotificationType.Error

  get isNotificationBarOpen() {
    return this._isNotificationBarOpen
  }

  constructor() { }

  callNotificationBar(notificationType: NotificationType, timer: number = null) {
    this.notificationType = notificationType
    this._isNotificationBarOpen = true;
    setTimeout(() => this._isNotificationBarOpen = false, timer != null? timer : 5000)
  }

  closeNotificationBar() {
    this._isNotificationBarOpen = false
  }
}
