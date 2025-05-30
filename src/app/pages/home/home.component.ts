import { AfterViewInit, Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AboutSectionComponent } from '../../features/about/components/about-section/about-section.component';
import { ProjectsSectionComponent } from '../../features/projects/components/projects-section/projects-section.component';
import { SkillsGameComponent } from '../../features/skills-game/components/skills-game/skills-game.component';
import { LinksSectionComponent } from '../../features/links-section/components/links-section.component';
import { FooterComponent } from '../../features/footer/component/footer.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
// import otros componentes aquí

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    AboutSectionComponent,
    SkillsGameComponent,
    ProjectsSectionComponent,
    LinksSectionComponent,
    FooterComponent
    // ...otros
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  footerVisible = false;
  isMobile = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  @HostListener('window:resize', [])
  onResize() {
    this.checkViewport();
  }

  private checkViewport() {
    this.isMobile = window.innerWidth <= 768;
  }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkViewport();
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const footerElement = document.querySelector('.footer-container');

      if ('IntersectionObserver' in window && footerElement) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                this.footerVisible = true;
                observer.disconnect(); // Opcional: lo desconecta después de mostrarse
              }
            });
          },
          {
            threshold: 0.2
          }
        );

        observer.observe(footerElement);
      } else {
        // fallback si no hay IntersectionObserver
        this.footerVisible = true;
      }
    }
  }
}

