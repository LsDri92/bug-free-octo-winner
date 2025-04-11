import {
  Component,
  ElementRef,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { ILanguage } from '../../../core/models/ILanguage';
import { Subject, takeUntil } from 'rxjs';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
      lang: ILanguage | null = null;
      private destroy$ = new Subject<void>();
      get footer() {
        return this.lang?.footer ?? {  name: '',
          title: '',
          connect: '',
          rights: '',
          message: ''};
      }
  @ViewChild('footerRef') footerRef!: ElementRef;
  show = false;
  year = new Date().getFullYear();

   constructor(private translationService: TranslationService){}
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
