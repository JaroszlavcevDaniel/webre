import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from "@angular/core";
import { LanguageService } from "../../services/language-service";
import { isPlatformBrowser } from "@angular/common";



@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {

    currentLang: 'hu' | 'en' = 'hu';

    isScrolled = false;

  constructor(private languageService: LanguageService,
          @Inject(PLATFORM_ID) private platformId: Object
  ) {}

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