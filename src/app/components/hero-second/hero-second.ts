import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language-service';

@Component({
  selector: 'app-hero-second',
  standalone: false,
  templateUrl: './hero-second.html',
  styleUrl: './hero-second.css',
})
export class HeroSecond implements OnInit {

  currentLang: 'hu' | 'en' = 'hu';

   constructor
    (private languageService: LanguageService) {
  
    }

      ngOnInit(): void {
    this.languageService.lang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }
    
  // A kártyák megfordított állapotát tároló tömb
  cardsFlipped: boolean[] = [false, false, false];

  /**
   * Egy adott indexű kártya megfordítását vezérlő metódus
   * @param index a kártya sorszáma (0, 1 vagy 2)
   */
  toggleCard(index: number): void {
    if (index >= 0 && index < this.cardsFlipped.length) {
      this.cardsFlipped[index] = !this.cardsFlipped[index];
    }
  }
}
