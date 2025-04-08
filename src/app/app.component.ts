import {
  AfterViewInit,
  Component,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import {
  CommonModule,
  isPlatformBrowser
} from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { ContactModalComponent } from './features/contact/components/contact-modal/contact-modal.component';
import { LinksSectionComponent } from './features/links-section/components/links-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    ContactModalComponent,
    LinksSectionComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  showHeader = true;
  showModal = false;

  openModal() {
    this.showModal = true;
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Esperar un poco a que el DOM se estabilice
      setTimeout(() => {
        const linksSection = document.querySelector('#links');
        if (!linksSection) return;

        const observer = new IntersectionObserver(
          ([entry]) => {
            this.showHeader = !entry.isIntersecting;
          },
          {
            threshold: 0.4, // podés ajustar esto para que se oculte más temprano o más tarde
          }
        );

        observer.observe(linksSection);
      }, 300); // le damos tiempo a Angular para renderizar todo
    }
  }
}
