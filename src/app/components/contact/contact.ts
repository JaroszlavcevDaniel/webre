import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LanguageService } from '../../services/language-service';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {

  currentLang: 'hu' | 'en' = 'hu';

  kapcsolatForm!: FormGroup;
  kuldesFolyamatban: boolean = false;
  sikerUzenet: boolean = false;
  hibaUzenet: string = '';

  // Állítsd be a saját PHP fájlod elérési útját
  private phpApiUrl = 'https://weboldal-rendeles.hu/contacter.php';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {

        this.languageService.lang$.subscribe(lang => {
      this.currentLang = lang;
    });
    
    this.kapcsolatForm = this.fb.group({
      nev: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefon: [''],
      uzenet: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // Rövidítés az űrlap mezőinek könnyebb eléréséhez a HTML-ben
  get f() {
    return this.kapcsolatForm.controls;
  }

  onSubmit(): void {
    this.sikerUzenet = false;
    this.hibaUzenet = '';

    if (this.kapcsolatForm.invalid) {
      this.kapcsolatForm.markAllAsTouched();
      return;
    }

    this.kuldesFolyamatban = true;

    this.http.post(this.phpApiUrl, this.kapcsolatForm.value).subscribe({
      next: (response: any) => {
        this.kuldesFolyamatban = false;
        if (response.success) {
          this.sikerUzenet = true;
          this.kapcsolatForm.reset();
        } else {
          this.hibaUzenet = response.message || 'Hiba történt az üzenet küldése során.';
        }
      },
      error: (error) => {
        this.kuldesFolyamatban = false;
        this.hibaUzenet = 'Nem sikerült kapcsolódni a szerverhez. Kérlek, próbáld újra később!';
        console.error('Küldési hiba:', error);
      }
    });
  }
}