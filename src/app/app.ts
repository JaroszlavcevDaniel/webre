import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import Lenis from 'lenis';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {

  protected readonly title = signal('weboldalrendeles');
  
  private lenis?: Lenis;

  ngOnInit(): void {
    // Lenis inicializálása
    this.lenis = new Lenis({
      duration: 1.2,   // Görgetés időtartama (minél nagyobb, annál lassabb/lágyabb)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing függvény
      smoothWheel: true,
    });

    // RequestAnimationFrame ciklus a folyamatos animációhoz
    const raf = (time: number) => {
      this.lenis?.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }

  ngOnDestroy(): void {
    this.lenis?.destroy();
  }
}
  

