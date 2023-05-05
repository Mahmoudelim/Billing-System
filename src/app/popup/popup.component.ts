import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { item } from '../Model/item';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Input() selectedItem!: item;
  @Output() closePopup = new EventEmitter<void>();

  dataFromFirebase: any;

  constructor(private popupService: PopupService) {}

  ngOnInit() {
    this.popupService.getVisibility().subscribe(visible => {
      if (visible) {
        this.show();
      } else {
        this.hide();
      }
    });
  }

  show() {
    document.body.classList.add('popup-open');
  }

  hide() {
    document.body.classList.remove('popup-open');
    this.closePopup.emit();
  }

  onClose() {
    this.popupService.hide();
  }
}
