import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent implements OnInit {
  @ViewChild('carousel', { static: true }) carousel!: ElementRef;

  projects = [
    {
      title: 'Juego de Estrategia',
      description: 'Prototipo de combate por turnos.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      title: 'Pixel Platformer',
      description: 'Pruebas de movimiento fluido y físicas.',
      videoUrl: 'https://www.youtube.com/embed/ysz5S6PUM-U'
    }
  ];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  scrollLeft(): void {
    this.carousel.nativeElement.scrollBy({ left: -400, behavior: 'smooth' });
  }

  scrollRight(): void {
    this.carousel.nativeElement.scrollBy({ left: 400, behavior: 'smooth' });
  }
}
