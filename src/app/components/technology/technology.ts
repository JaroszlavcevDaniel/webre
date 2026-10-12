import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language-service';

@Component({
  selector: 'app-technology',
  standalone: false,
  templateUrl: './technology.html',
  styleUrl: './technology.css',
})
export class Technology implements OnInit{

  currentLang: 'hu' | 'en' = 'hu';

  selectedCategory: string = 'all';

   constructor
    (private languageService: LanguageService) {
  
    }

      ngOnInit(): void {
    this.languageService.lang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  filterCategory(category: string): void {
    this.selectedCategory = category;
  }

  isCategoryVisible(category: string): boolean {
    return this.selectedCategory === 'all' || this.selectedCategory === category;
  }
  
}
