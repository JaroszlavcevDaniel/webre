import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language-service';

@Component({
  selector: 'app-reference',
  standalone: false,
  templateUrl: './reference.html',
  styleUrl: './reference.css',
})
export class Reference implements OnInit {

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
