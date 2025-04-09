// src/app/services/translation.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ILanguage } from '../models/ILanguage';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private translations$ = new BehaviorSubject<ILanguage | null>(null);
  private currentLang = 'es';

  constructor(private http: HttpClient) {
    this.loadTranslations(this.currentLang);
  }

  get currentTranslations() {
    return this.translations$.asObservable();
  }

  switchLanguage(lang: 'es' | 'en') {
    this.currentLang = lang;
    this.loadTranslations(lang);
  }

  private loadTranslations(lang: string) {
    this.http.get<ILanguage>(`/assets/i18n/${lang}.json`)
      .subscribe(data => this.translations$.next(data));
  }

  get currentLangCode(): string {
    return this.currentLang;
  }
}
