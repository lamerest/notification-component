import { Injectable } from '@angular/core';
import { NotificationType } from './notification-type';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private  _isNotificationBarOpen = false
  private _title = "Error"
  private _message = "Something went wrong"
  private _notificationType = NotificationType.Error

  get isNotificationBarOpen(): boolean {
    return this._isNotificationBarOpen
  }

  get title(): string {
    return this._title
  }

  get message(): string {
    return this._message
  }

  get notificationType(): NotificationType {
    return this._notificationType
  }

  constructor() { }

  callNotificationBar(notificationType: NotificationType, title: string, message: string, timer: number = null) {
    this._notificationType = notificationType
    this._title = title
    this._message = message
    this._isNotificationBarOpen = true;
    setTimeout(() => this._isNotificationBarOpen = false, timer != null? timer : 5000)
  }

  closeNotificationBar() {
    this._isNotificationBarOpen = false
  }
}
