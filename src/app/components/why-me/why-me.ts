import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { LanguageService } from '../../services/language-service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-why-me',
  standalone: false,
  templateUrl: './why-me.html',
  styleUrl: './why-me.css',
})
export class WhyMe implements OnInit {

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
    }, 150); // Picit növeltük az időt, hogy tuti kész legyen a DOM
  }
onContactClick(): void {
    console.log('Kattintás a "Kezdjük el a közös munkát!" gombra.');
    

  }
  
}



