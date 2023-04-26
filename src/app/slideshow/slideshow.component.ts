import { Component } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent {
  images = [
    '/assets/images/voda.jpg',
    '/assets/images/mob.jpg',
    '/assets/images/we.jpg'
  ];
  currentImage = this.images[0];

  nextImage() {
    const currentIndex = this.images.indexOf(this.currentImage);
    const nextIndex = currentIndex === this.images.length - 1 ? 0 : currentIndex + 1;
    this.currentImage = this.images[nextIndex];
  }

  prevImage() {
    const currentIndex = this.images.indexOf(this.currentImage);
    const prevIndex = currentIndex === 0 ? this.images.length - 1 : currentIndex - 1;
    this.currentImage = this.images[prevIndex];
  }
}
