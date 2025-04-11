import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';
import { ILanguage } from '../../../../core/models/ILanguage';
import { Subject, takeUntil } from 'rxjs';
import { TranslationService } from '../../../../core/services/translation.service';

@Component({
  standalone: true,
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class ContactModalComponent {
    lang: ILanguage | null = null;
    private destroy$ = new Subject<void>();
    get contact() {
      return this.lang?.contact ?? {title: '', name: '', message: '', email: '', succesMessage: '', errorMessage: '', send: '', cancel: '' };
    }
  
    successMessage = '';
    errorMessage = '';
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();

  form = {
    name: '',
    email: '',
    message: '',
  };

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

  close() {
    this.closed.emit();
  }

  sendEmail() {
    if (!this.form.name || !this.form.email || !this.form.message) {
      this.errorMessage = this.contact.errorMessage;
      return;
    }

    emailjs
      .send(
        'service_uh9mb3c', // Reemplazá con tu Service ID
        'template_rpo90kk', // Reemplazá con tu Template ID
        {
          from_name: this.form.name,
          from_email: this.form.email,
          message: this.form.message,
        },
        'gPhm4EFalgKx3KrHG' // Reemplazá con tu Public Key
      )
      .then(() => {
        this.successMessage = this.contact.succesMessage;
        this.form = { name: '', email: '', message: '' };
        this.close();
      })
      .catch((error) => {
        console.error('Error al enviar el mensaje:', error);
        this.errorMessage = this.contact.errorMessage;
      });
  }
}
