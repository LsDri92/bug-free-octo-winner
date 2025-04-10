import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ILanguage } from '../../../../core/models/ILanguage';
import { TranslationService } from '../../../../core/services/translation.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})


export class AboutSectionComponent {
  imageUrl = 'assets/images/profile.png'; // Cambia por la URL de tu imagen
  lang: ILanguage | null = null;
  private destroy$ = new Subject<void>();
  get about() {
    return this.lang?.about ?? { name: '', title: '' };
  }

  constructor(private translationService: TranslationService){

  }
  
  ngOnInit() {
    this.translationService.currentTranslations
    .pipe(takeUntil(this.destroy$))
    .subscribe(data => this.lang = data);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
