import { Component, EventEmitter, Output } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true, // 👈 clave
  imports: [ CommonModule ], // 👈 los íconos van acá
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() openContactModal = new EventEmitter<void>();
  menuOpen = false;
  isDarkTheme = true;
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    if (typeof window !== 'undefined') {
      const theme = this.themeService.getTheme();
      this.isDarkTheme = theme === 'dark';
      document.documentElement.setAttribute('data-theme', theme);
    }
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