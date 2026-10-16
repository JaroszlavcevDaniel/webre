import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { LanguageService } from '../../services/language-service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit {

 currentLang: 'hu' | 'en' = 'hu';

  constructor
  (private languageService: LanguageService,
          @Inject(PLATFORM_ID) private platformId: Object
  ) {

  }

    ngOnInit(): void {
    this.languageService.lang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  scrollToTop(): void {
   
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });

      const container = document.querySelector('.scroll-container') as HTMLElement | null;
      if (container) {
        container.scrollTop = 0;
      }
    }, 0);
}
  
}
