
import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID
} from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../services/language-service';

@Component({
  selector: 'app-float',
  standalone: false,
  templateUrl: './float.html',
  styleUrl: './float.css',
})
export class Float implements OnInit, OnDestroy {

  currentLang: 'hu' | 'en' = 'hu';

  isContactVisible = false;

  private observer?: IntersectionObserver;
  private langSubscription?: Subscription;
  private removeVisibilityListeners?: () => void;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.langSubscription = this.languageService.lang$.subscribe(lang => {
      this.currentLang = lang;
    });

    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.setupIntersectionObserver(), 100);
    }
  }



private setupIntersectionObserver(): void {
  const checkVisibility = (): void => {
    const contact = document.getElementById('contact');
    const references = document.getElementById('references');

    const isVisible = (element: HTMLElement | null): boolean => {
      if (!element) return false;

      const rect = element.getBoundingClientRect();

      return rect.top < window.innerHeight && rect.bottom > 0;
    };

    this.isContactVisible =
      isVisible(contact) || isVisible(references);
  };

  checkVisibility();

  window.addEventListener('scroll', checkVisibility, { passive: true });
  window.addEventListener('resize', checkVisibility);

  this.removeVisibilityListeners = () => {
    window.removeEventListener('scroll', checkVisibility);
    window.removeEventListener('resize', checkVisibility);
  };
}

  scrollToContact(): void {
    const contactElement = document.getElementById('contact');

    contactElement?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  ngOnDestroy(): void {
  this.observer?.disconnect();
  this.langSubscription?.unsubscribe();
  this.removeVisibilityListeners?.();
}
}
