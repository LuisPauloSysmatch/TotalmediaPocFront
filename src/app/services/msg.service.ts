import { Injectable } from '@angular/core';

import { MessageService } from 'primeng/api';

import { ToastSeverityTypes } from 'src/app/enums/toast-severity-types.enum';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  //#region Properties

  /**
   * Number of time in milliseconds to wait before closing the message
   */
  private life = 10000;

  //#endregion

  //#region Ng Core

  constructor(
    private message: MessageService,
  ) { }

  //#endregion

  //#region Public Methods

  /**
   * Show a toast info message
   * @param title Toast title
   * @param msg Toast message
   * @param keptVisible Whether the message should be automatically closed based on life property or kept visible
   */
  infoMsg(title: string, msg: string, keptVisible: boolean = false): void {
    this.message.add({
      severity: ToastSeverityTypes.Info,
      summary: title,
      detail: msg,
      sticky: keptVisible,
      life: this.life
    });
  }

  /**
   * Show a toast success message
   * @param title Toast title
   * @param msg Toast message
   * @param keptVisible Whether the message should be automatically closed based on life property or kept visible
   */
  successMsg(title: string, msg: string, keptVisible: boolean = false): void {
    this.message.add({
      severity: ToastSeverityTypes.Success,
      summary: title,
      detail: msg,
      sticky: keptVisible,
      life: this.life
    });
  }

  /**
   * Show a toast warning message
   * @param title Toast title
   * @param msg Toast message
   * @param keptVisible Whether the message should be automatically closed based on life property or kept visible
   */
  warnMsg(title: string, msg: string, keptVisible: boolean = false): void {
    this.message.add({
      severity: ToastSeverityTypes.Warning,
      summary: title,
      detail: msg,
      sticky: keptVisible,
      life: this.life
    });
  }

  /**
   * Show a toast error message
   * @param title Toast title
   * @param msg Toast message
   * @param keptVisible Whether the message should be automatically closed based on life property or kept visible
   */
  errorMsg(title: string, msg: string, keptVisible: boolean = false): void {
    this.message.add({
      severity: ToastSeverityTypes.Error,
      summary: title,
      detail: msg,
      sticky: keptVisible,
      life: this.life
    });
  }

  /**
   * Show toast message
   * @param title Toast title
   * @param msg Toast message
   * @param type Toast type (info, success, warn, error), use ToastSeverityTypes Enum
   * @param keptVisible Whether the message should be automatically closed based on life property or kept visible
   */
  msg(title: string, msg: string, type: ToastSeverityTypes, keptVisible: boolean = false): void {
    this.message.add({
      severity: type,
      summary: title,
      detail: msg,
      sticky: keptVisible,
      life: this.life
    });
  }

  /**
   * Show multiple toast messages
   * @param title Toast title (translation id)
   * @param msgs Toast messages (translation id)
   * @param type Toast type (info, success, warn, error), use ToastSeverityTypes Enum
   * @param keptVisible Whether the message should be automatically closed based on life property or kept visible
   */
  multiMsgs(title: string, msgs: string[], type: ToastSeverityTypes, keptVisible: boolean = false): void {
    msgs.forEach(msg => {
      this.message.add({
        severity: type,
        summary: title,
        detail: msg,
        sticky: keptVisible,
        life: this.life
      });
    });
  }

  //#endregion

}
