import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language-service';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {

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
