import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private popupOpen = false;

  constructor() { }
  private visibilitySubject = new BehaviorSubject<boolean>(false);

  show() {
    this.visibilitySubject.next(true);
  }

  hide() {
    this.visibilitySubject.next(false);
  }

  getVisibility() {
    return this.visibilitySubject.asObservable();
  }
  isPopupOpen() {
    return this.popupOpen;
  }
}
