import { Component, HostListener, OnInit } from "@angular/core";
import { LanguageService } from "../../services/language-service";



@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {

    currentLang: 'hu' | 'en' = 'hu';

    isScrolled = false;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.lang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  changeLanguage(): void {
    const newLang = this.currentLang === 'hu' ? 'en' : 'hu';
    this.languageService.setLanguage(newLang);
  }

  closeMobileMenu(): void {
    const navbar = document.getElementById('navbarNav');

    if (navbar && navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Ha a görgetés mértéke nagyobb, mint 50px, az isScrolled igaz lesz
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollPosition > 50;
  }

}