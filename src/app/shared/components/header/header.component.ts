import { Component, EventEmitter, Output } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../core/services/translation.service';


@Component({
  selector: 'app-header',
  standalone: true, // 👈 clave
  imports: [ CommonModule ], // 👈 los íconos van acá
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() openContactModal = new EventEmitter<void>();

  lang: 'es' | 'en' = 'en';
  menuOpen = false;
  isDarkTheme = true;
  constructor(private themeService: ThemeService, private translationService: TranslationService) {}

  ngOnInit() {
    if (typeof window !== 'undefined') {
      const theme = this.themeService.getTheme();
      this.isDarkTheme = theme === 'dark';
      document.documentElement.setAttribute('data-theme', theme);
    }

    this.lang = this.translationService.currentLangCode as 'es' | 'en';
  }
  

  toggleLanguage() {
    this.lang = this.lang === 'es' ? 'en' : 'es';
    this.translationService.switchLanguage(this.lang);
  }
  
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const theme = this.isDarkTheme ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  openModal() {
    this.openContactModal.emit();
  }
}