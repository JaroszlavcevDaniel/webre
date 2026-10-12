import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language-service';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements OnInit {

  currentLang: 'hu' | 'en' = 'hu';

  currentYear: number = new Date().getFullYear();
  
   constructor
    (private languageService: LanguageService) {
  
    }

      ngOnInit(): void {
    this.languageService.lang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }
    
}
