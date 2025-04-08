import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme: 'dark' | 'light' = 'dark';

  constructor() {
    if (this.isBrowser()) {
      const savedTheme = localStorage.getItem('theme') as 'dark' | 'light';
      if (savedTheme) {
        this.setTheme(savedTheme);
      } else {
        this.setTheme('dark');
      }
    }
  }

  getTheme(): string {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark'; // valor por defecto si es SSR
  }
  
  setTheme(theme: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }
  toggleTheme() {
    const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }


  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
