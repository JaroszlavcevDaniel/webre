import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { LanguageService } from '../../services/language-service';

@Component({
  selector: 'app-float',
  standalone: false,
  templateUrl: './float.html',
  styleUrl: './float.css',
})
export class Float implements OnInit, OnDestroy {

  currentLang: 'hu' | 'en' = 'hu';

  isContactVisible: boolean = false;
  private observer!: IntersectionObserver;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
  private languageService: LanguageService
) {}

  ngOnInit(): void {
        this.languageService.lang$.subscribe(lang => {
      this.currentLang = lang;
    });
    
    // Ellenőrizzük, hogy böngésző környezetben fut-e az kód (SSR védelem)
    if (isPlatformBrowser(this.platformId)) {
      this.setupIntersectionObserver();
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  // Megkeresi a #contact elemet és figyeli a láthatóságát
  private setupIntersectionObserver(): void {
    const contactElement = document.getElementById('contact');

    if (!contactElement) {
      console.warn('FloatingButtonComponent: Nem található "#contact" azonosítójú elem az oldalon!');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Ha a #contact elem látható a képernyőn (legalább 10%-ban), elrejtjük a gombot
          this.isContactVisible = entry.isIntersecting;
        });
      },
      {
        threshold: 0.1 // A kapcsolati elem 10%-os láthatóságánál már reagál
      }
    );

    this.observer.observe(contactElement);
  }

  // Finom görgetés a #contact szekcióhoz
  scrollToContact(): void {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}