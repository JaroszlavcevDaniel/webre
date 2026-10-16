import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { LanguageService } from '../../services/language-service';
import { isPlatformBrowser } from '@angular/common';

interface ProjectImage {
  thumb: string;
  full: string;
  title: string;
}

interface Project {
  titleHtml: { hu: string; en: string };
  descriptionHtml: { hu: string; en: string };
  images: ProjectImage[];
}

@Component({
  selector: 'app-reference',
  standalone: false,
  templateUrl: './reference.html',
  styleUrl: './reference.css',
})
export class Reference implements OnInit {

  currentLang: 'hu' | 'en' = 'hu';

  constructor
    (private languageService: LanguageService,
      @Inject(PLATFORM_ID) private platformId: Object
    ) {

  }


  projects: Project[] = [
    {
      titleHtml: {
        hu: `Marketing és management ügynökség weboldala`,
        en: `Website of a marketing and management agency`
      },
      descriptionHtml: {
        hu: `<p>Dinamikus, többoldalas weboldal többnyelvű támogatással, beépített értesítő űrlappal és teljes körűen szerkeszthető adminisztrációs felülettel.</p>
</p>`,
        en: `Dynamic, multi-page website with multilingual support, a built-in notification form, and a fully editable administration interface.</p>
`
      },
      images: [
        { thumb: '/images/1-1.jpg', full: '/images/1-1.jpg', title: 'Néhány érzékény adat elrejtve a GDPR szabályok szerint. <br> Some sensitive data hidden in accordance with GDPR rules.' },
        { thumb: '/images/1-2.jpg', full: '/images/1-2.jpg', title: 'Néhány érzékény adat elrejtve a GDPR szabályok szerint. <br> Some sensitive data hidden in accordance with GDPR rules.' },
        { thumb: '/images/1-3.jpg', full: '/images/1-3.jpg', title: 'Néhány érzékény adat elrejtve a GDPR szabályok szerint. <br> Some sensitive data hidden in accordance with GDPR rules.' },
        { thumb: '/images/1-4.jpg', full: '/images/1-4.jpg', title: 'Néhány érzékény adat elrejtve a GDPR szabályok szerint. <br> Some sensitive data hidden in accordance with GDPR rules.' }
      ]
    },

      {
      titleHtml: {
        hu: `Pályazatíró cég weboldala`,
        en: `Website of a grant-writing firm`
      },
      descriptionHtml: {
        hu: `<p>Modern, néhány oldalas weboldal dinamikus űrlapokkal és beépített értesítő űrlappal.</p>`,
        en: `<p>Modern, multi-page website featuring dynamic forms and a built-in notification form.</p>`
      },
      images: [
        { thumb: '/images/6-1.jpg', full: '/images/6-1.jpg', title: 'Néhány érzékény adat elrejtve a GDPR szabályok szerint. <br> Some sensitive data hidden in accordance with GDPR rules.' },
        { thumb: '/images/6-2.jpg', full: '/images/6-2.jpg', title: 'Néhány érzékény adat elrejtve a GDPR szabályok szerint. <br> Some sensitive data hidden in accordance with GDPR rules.' },
        { thumb: '/images/6-3.jpg', full: '/images/6-3.jpg', title: 'Néhány érzékény adat elrejtve a GDPR szabályok szerint. <br> Some sensitive data hidden in accordance with GDPR rules.' },
        { thumb: '/images/6-4.jpg', full: '/images/6-4.jpg', title: 'Néhány érzékény adat elrejtve a GDPR szabályok szerint. <br> Some sensitive data hidden in accordance with GDPR rules.' }
      ]
    },

    {
      titleHtml: {
        hu: `Ház építő cég weboldala`,
        en: `Website of a home construction company`
      },
      descriptionHtml: {
        hu: `<p>Modern, egyoldalas landing page többnyelvű támogatással, interaktív fotógalériával és beépített értesítő űrlappal.</p>
</p>`,
        en: `<p>A landing page-style website featuring language switching, photo display, and a notification form.</p>
</p>`
      },
      images: [
        { thumb: '/images/2-1.jpg', full: '/images/2-1.jpg', title: ' ' },
        { thumb: '/images/2-2.jpg', full: '/images/2-2.jpg', title: ' ' },
        { thumb: '/images/2-3.jpg', full: '/images/2-3.jpg', title: ' ' },
        { thumb: '/images/2-4.jpg', full: '/images/2-4.jpg', title: ' ' }
      ]
    },

    {
      titleHtml: {
        hu: `Raktárkezelő webalkalmazás`,
        en: `Warehouse Management Web Application`
      },
      descriptionHtml: {
        hu: `<p>Biztonságos bejelentkezéssel, raktárkészlet-nyilvántartással, teljes körű termékkezeléssel (felvétel, szerkesztés, törlés) és statisztikai modullal rendelkező raktárkezelési webalkalmazás.</p>`,
        en: `<p>Warehouse management web application featuring secure login, inventory tracking, comprehensive product management (adding, editing, deleting), and a statistics module.</p>`
      },
      images: [
        { thumb: '/images/4-1.jpg', full: '/images/4-1.jpg', title: 'Néhány érzékény adat elrejtve a GDPR szabályok szerint. <br> Some sensitive data hidden in accordance with GDPR rules.' },
        { thumb: '/images/4-2.jpg', full: '/images/4-2.jpg', title: 'Néhány érzékény adat elrejtve a GDPR szabályok szerint. <br> Some sensitive data hidden in accordance with GDPR rules.' },
        { thumb: '/images/4-3.jpg', full: '/images/4-3.jpg', title: 'Néhány érzékény adat elrejtve a GDPR szabályok szerint. <br> Some sensitive data hidden in accordance with GDPR rules.' },
        { thumb: '/images/4-4.jpg', full: '/images/4-4.jpg', title: 'Néhány érzékény adat elrejtve a GDPR szabályok szerint. <br> Some sensitive data hidden in accordance with GDPR rules.' }
      ]
    },

      {
      titleHtml: {
        hu: `Motoros portál`,
        en: `Motorcycling portal`
      },
      descriptionHtml: {
        hu: `<p>Többnyelvű, többoldalas webalkalmazás admin panelből kezelhető tartalommal, komplett cikk-kezelési (létrehozás, szerkesztés, törlés) funkcióval és kapcsolati modullal. </p>
</p>`,
        en: `<p>A multilingual, multi-page web application with content manageable via an admin panel, featuring comprehensive article management (creation, editing, deletion) and a contact module.</p>
</p>`
      },
      images: [
        { thumb: '/images/3-1.jpg', full: '/images/3-1.jpg', title: 'Néhány érzékény adat elrejtve a GDPR szabályok szerint. <br> Some sensitive data hidden in accordance with GDPR rules.' },
        { thumb: '/images/3-2.jpg', full: '/images/3-2.jpg', title: 'Néhány érzékény adat elrejtve a GDPR szabályok szerint. <br> Some sensitive data hidden in accordance with GDPR rules.' },
        { thumb: '/images/3-3.jpg', full: '/images/3-3.jpg', title: 'Néhány érzékény adat elrejtve a GDPR szabályok szerint. <br> Some sensitive data hidden in accordance with GDPR rules.' },
        { thumb: '/images/3-4.jpg', full: '/images/3-4.jpg', title: 'Néhány érzékény adat elrejtve a GDPR szabályok szerint. <br> Some sensitive data hidden in accordance with GDPR rules.' }
      ]
    },


      {
      titleHtml: {
        hu: `Légkondicionáló szerelő weboldala`,
        en: `Best air conditioning service website`
      },
      descriptionHtml: {
        hu: `<p>Modern, egyoldalas landing page beépített értesítő űrlappal.</p>`,
        en: `<p>Modern, single-page landing page with a built-in notification form.</p>`
      },
      images: [
        { thumb: '/images/5-1.jpg', full: '/images/5-1.jpg', title: 'Néhány érzékény adat elrejtve a GDPR szabályok szerint. <br> Some sensitive data hidden in accordance with GDPR rules.' },
        { thumb: '/images/5-2.jpg', full: '/images/5-2.jpg', title: 'Néhány érzékény adat elrejtve a GDPR szabályok szerint. <br> Some sensitive data hidden in accordance with GDPR rules.' },
        { thumb: '/images/5-3.jpg', full: '/images/5-3.jpg', title: 'Néhány érzékény adat elrejtve a GDPR szabályok szerint. <br> Some sensitive data hidden in accordance with GDPR rules.' },
        { thumb: '/images/5-4.jpg', full: '/images/5-4.jpg', title: 'Néhány érzékény adat elrejtve a GDPR szabályok szerint. <br> Some sensitive data hidden in accordance with GDPR rules.' }
      ]
    },

  

    // ... Ugyanígy folytathatod a 3-as, 4-es ... egészen a 10. projektig!
  ];
  // Lightbox állapotok
  lightboxOpen = false;
  currentProjectIndex = 0;
  currentImgIndex = 0;

  get currentProjectImages(): ProjectImage[] {
    return this.projects[this.currentProjectIndex]?.images || [];
  }

  get currentImage(): ProjectImage | null {
    const images = this.currentProjectImages;
    return images[this.currentImgIndex] || null;
  }

  openLightbox(projectIndex: number, imageIndex: number): void {
    this.currentProjectIndex = projectIndex;
    this.currentImgIndex = imageIndex;
    this.lightboxOpen = true;
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
  }

  nextImage(): void {
    const length = this.currentProjectImages.length;
    this.currentImgIndex = (this.currentImgIndex + 1) % length;
  }

  prevImage(): void {
    const length = this.currentProjectImages.length;
    this.currentImgIndex = (this.currentImgIndex - 1 + length) % length;
  }

ngOnInit(): void {
    // 1. Nyelvfigyelés
    this.languageService.lang$.subscribe(lang => {
      this.currentLang = lang;
    });

    // 2. Minden lehetséges scrollozási módszer kényszerítése
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        // A) Alap ablak görgetések
        window.scrollTo(0, 0);
        document.body.scrollTop = 0; // Safari
        document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera

        // B) Ha van egyedi scrollozós elem (pl. .scroll-container)
        const container = document.querySelector('.scroll-container') as HTMLElement | null;
        if (container) {
          container.scrollTop = 0;
        }

        // C) Biztos ami biztos, keressünk más gyakori layout konténereket is (pl. router outlet burkolók)
        const appRoot = document.querySelector('app-root') as HTMLElement | null;
        if (appRoot) {
          appRoot.scrollTop = 0;
        }
      }, 50);
    }
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






