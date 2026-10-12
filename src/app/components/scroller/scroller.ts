import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-scroller',
  standalone: false,
  templateUrl: './scroller.html',
  styleUrl: './scroller.css',
})
export class Scroller {

  progress = signal<number>(0);

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) {
      this.progress.set(0);
      return;
    }
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    const percentage = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100));
    this.progress.set(percentage);
  }
  

}
