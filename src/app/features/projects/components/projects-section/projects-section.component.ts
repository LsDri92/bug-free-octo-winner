import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
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
  @ViewChildren('cards') cards!: QueryList<ElementRef>;

  projects = [
    {
      title: 'ProtoProjects and early experiments on Pixijs',
      description: 'Game Prototypes, Betas & Mechanics in PixiJS + TypeScript',
      videoUrl: 'https://www.youtube.com/embed/vyBOFXpXCr8'
    },
    {
      title: '"Eternal Rest" - Demo - Unreal Engine',
      description: 'Adventure & Puzzle Game Prototype Demo – Unreal Engine',
      videoUrl: 'https://www.youtube.com/embed/mFMfcGoVcsA'
    }
  ];

  currentIndex = 0;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  scrollToCard(index: number) {
    const card = this.cards.toArray()[index];
    const container = this.carousel.nativeElement;
  
    if (card && container) {
      const cardElement = card.nativeElement;
  
      const containerRect = container.getBoundingClientRect();
      const cardRect = cardElement.getBoundingClientRect();
  
      const containerScrollLeft = container.scrollLeft;
      const cardOffsetLeft = cardRect.left - containerRect.left;
  
      const scrollTo = containerScrollLeft + cardOffsetLeft - (container.offsetWidth / 2) + (cardElement.offsetWidth / 2);
  
      container.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
  
      this.currentIndex = index;
    }
  }
scrollLeft() {
  if (this.currentIndex > 0) {
    this.currentIndex--;
    this.scrollToCard(this.currentIndex);
  } else {
    this.fakeBounce(this.carousel.nativeElement, 'left');
  }
}

scrollRight() {
  if (this.currentIndex < this.cards.length - 1) {
    this.currentIndex++;
    this.scrollToCard(this.currentIndex);
  } else {
    this.fakeBounce(this.carousel.nativeElement, 'right');
  }
}
  
fakeBounce(container: HTMLElement, direction: 'left' | 'right') {
  const bounceDistance = 20;
  const sign = direction === 'left' ? -1 : 1;

  // Mover un poquito sin animación (rebote instantáneo)
  container.scrollBy({ left: sign * bounceDistance, behavior: 'auto' });

  // Rebotar hacia atrás con un pequeño delay
  requestAnimationFrame(() => {
    setTimeout(() => {
      container.scrollBy({ left: -sign * bounceDistance, behavior: 'smooth' });
    }, 50);
  });
}
}
