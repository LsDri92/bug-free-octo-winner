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
      title: 'ProtoProjects and early experiments on Pixijs',
      description: 'Game Prototypes, Betas & Mechanics in PixiJS + TypeScript',
      videoUrl: 'https://www.youtube.com/watch?v=vyBOFXpXCr8'
    },
    {
      title: '"Eternal Rest" - Demo - Unreal Engine',
      description: 'Adventure & Puzzle Game Prototype Demo – Unreal Engine',
      videoUrl: 'https://www.youtube.com/watch?v=mFMfcGoVcsA'
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
