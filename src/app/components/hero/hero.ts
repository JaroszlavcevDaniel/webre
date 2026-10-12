import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language-service';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit {

 currentLang: 'hu' | 'en' = 'hu';

  constructor
  (private languageService: LanguageService) {

  }

    ngOnInit(): void {
    this.languageService.lang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }
  
}
